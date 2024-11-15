
import ReactSelect from 'react-select'
import { api } from "../../../services/api";
import { useForm, Controller } from 'react-hook-form';
import BackupIcon from '@mui/icons-material/Backup';
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';





import { ButtonStyles, Container, ContainerInput, Input, Label, LabelUploading, TextArea } from './style'
import { useEffect, useState } from 'react';
import { ErrorMessage } from '../../../components';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Pending } from '@mui/icons-material';
import paths from '../../../constants/paths';


function EditProduct() {
    const navigate = useNavigate()
    const { state: { product } } = useLocation()
    console.log(product)

    const [categories, setCategories] = useState([])
    const [fileName, setFileName] = useState(null)


    // validação do form
    const schema = Yup.object().shape({
        name: Yup.string().required('O nome é obrigatório'),
        price: Yup.string().required('Digite o Preço do produto'),
        category: Yup.object().required('Escolha a categoria'),
        offer: Yup.bool()
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
        productsFormData.append('offer', data.offer)

        await toast.promise(api.put(`products/${product.id}`, productsFormData), {
            Pending: 'Editando produto',
            success: 'Produto Editado com sucesso',
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
                    <Input
                        type='text'
                        {...register('name')}
                        placeholder='Nome'
                        defaultValue={product.name} />
                    <ErrorMessage>{errors.name?.message}</ErrorMessage>
                </div>

                <div>
                    <Label>Preço</Label>
                    <Input
                        type='number'
                        {...register('price')}
                        placeholder='22,50'
                        defaultValue={product.price} />
                    <ErrorMessage>{errors.price?.message}</ErrorMessage>
                </div>


                <div>
                    <Label>Descrição</Label>
                    <TextArea
                        type='text'
                        {...register('descripition')}
                        placeholder='descrição'
                        defaultValue={product.descripition} />
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

                        <input
                            type='file'
                            accept='image/png, image/jpeg'
                            {...register('file')}
                            onChange={value => {
                                setFileName(value.target.files[0]?.name)
                            }}
                        />
                    </LabelUploading>
                    <ErrorMessage>{errors.file?.message}</ErrorMessage>
                </div>

                <div>
                    <Controller   // sendo feito dessa forma pois form não reconhece imput controlados
                        name='category'
                        control={control}
                        defaultValue={product.category}
                        render={({ field }) => {
                            return (
                                <ReactSelect
                                    {...field}
                                    options={categories}
                                    getOptionLabel={cat => cat.name}
                                    getOptionValue={cat => cat.id}
                                    placeholder='...Selecione a categoria'
                                    defaultValue={product.category}
                                />
                            )
                        }}
                    >
                    </Controller>
                    <ErrorMessage>{errors.category?.message}</ErrorMessage>
                </div>

                <ContainerInput>
                    <input
                        type='checkbox'
                        {...register('offer')}
                        defaultChecked={product.offer} />

                    <Label>Produto em oferta ?</Label>
                </ContainerInput>


                <ButtonStyles>Editar produtos</ButtonStyles>
            </form>
        </Container>
    )
}

export default EditProduct