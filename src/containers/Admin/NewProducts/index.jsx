
import ReactSelect from 'react-select'
import { api } from "../../../services/api";
import { useForm, Controller } from 'react-hook-form';
import BackupIcon from '@mui/icons-material/Backup';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';





import { ButtonStyles, Container, Input, Label, LabelUploading, TextArea } from './style'
import { useEffect, useState } from 'react';
import { ErrorMessage } from '../../../components';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Pending } from '@mui/icons-material';
import paths from '../../../constants/paths';


function Newproducts() {
    const navigate = useNavigate()

    const [categories, setCategories] = useState([])
    const [fileName, setFileName] = useState(null)


    // validação do form
    const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        price: Yup.string().required('Digite o Preço do produto'),
        category: Yup.object().required('Escolha a categoria'),
        file: Yup.mixed().test('required', 'Adicione uma imagem', value => {
            return value && value.length > 0
        })
    })


    // form 
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })
    const onSubmit = async data => {
        // formatando objeto para encaminhar para backend
        const price = data.price
        const fromatPrice = price.replace(/[.,]/g, ''); // Remove todas as vírgulas e pontos

        const productsFormData = new FormData()

        productsFormData.append('name', data.name)
        productsFormData.append('price', fromatPrice,)
        productsFormData.append('category_id', data.category.id)
        productsFormData.append('file', data.file[0])
        productsFormData.append('descripition', data.descripition)

        await toast.promise(api.post('products', productsFormData), {
            Pending: 'Criando produto',
            success: 'Produto criado com sucesso',
            error: 'Falha tente novamete'
        })
        setTimeout(() => {
            navigate(paths.Products)
        }, 2000)
    }

    useEffect(() => {
        async function loadingCategory() {
            const { data } = await api.get('categories')

            setCategories(data)
        }
        loadingCategory()
    }, [])


    return (
        <Container>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Label>Nome</Label>
                    <Input type='text' {...register('name')} placeholder='Nome' />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input type='number' {...register('price')} placeholder='22,50' />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>


                <div>
                    <Label>Descrição</Label>
                    <TextArea type='text' {...register('descripition')} placeholder='descrição' />
                    <ErrorMessage>{errors.descripition?.message}</ErrorMessage>
                </div>

                <div>
                    <LabelUploading>
                        {fileName || (
                            <>
                                <BackupIcon />
                                Carregue uma imagem
                            </>
                        )
                        }
                        {/**
                        <input
                            type='file'
                            accept='image/png, image/jpeg'
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />

                        */}
                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            {...register('file')}
                            onChange={(event) => {
                                const file = event.target.files?.[0];
                                if (file) {
                                    if (file.size > 2 * 1024 * 1024) {
                                        toast.error("O arquivo deve ter no máximo 2 MB!");
                                        event.target.value = "";
                                        return;
                                    }
                                    setFileName(file.name);
                                }
                            }}
                        />;
                    </LabelUploading>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller   // sendo feito dessa forma pois form não reconhece imput controlados
                        name='category'
                        control={control}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='...Selecione a categoria'
                                />
                            )
                        }}
                    >
                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ButtonStyles>Adicionar produtos</ButtonStyles>
            </form>
        </Container>
    )
}

export default Newproducts