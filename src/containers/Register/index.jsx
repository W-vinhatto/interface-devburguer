import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import { api } from '../../services/api';
import { toast } from 'react-toastify';

import bacground from "../../assets/lanche-bacground.svg"
import { Button } from "../../components/Button"

import {
    ContainerBg,
    Container,
    PDescrition,
    Fomr,
    InputContainer,
    Link,
    LinkText,
    ErrosForm
} from './style'
import { useNavigate } from 'react-router-dom';

export function Register() {
    const navigate = useNavigate()

    const schema = yup.object({
        name: yup
            .string()
            .required('O nome é Obrigatório'),
        email: yup
            .string()
            .required('O email é obrigatório')
            .email('Digite um e-mail válido'),
        password: yup
            .string()
            .required('A senha é obrigatória')
            .min(6, 'A senha deve ter no min 6 caracteres'),
        confirmPasswword: yup
            .string()
            .required('Confirme sua senha')
            .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
    })
        .required();

        
    const onSubmit = async (data) => {

        try {
            const { status } = await api.post('/users',
                {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                {
                    validateStatus: () => true
                }
            );
            if (status === 200 || status === 201) {
                toast.success('Conta criada com sucesso!')
                setTimeout(() => {
                    navigate('/')
                }, 2000)
            } else if (status === 400) {
                toast.error('Email já cadastrado')
            } else {
                throw new Error()
            }

        } catch (error) {
            toast.error("Falha no sitema Tente novamente")
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })


    return (
        <ContainerBg>
            <img src={bacground} alt="image-lanche" />
            <h1>Ólympo's <spam>BURGUER</spam></h1>
            <Container>
                <PDescrition> !! PREPARADO !! <br />
                    saboreia criações dignas das mais grandiosas lendas. Que os deuses da
                    gastronomia estejam com você!
                </PDescrition>

                <Fomr onSubmit={handleSubmit(onSubmit)} >
                    <InputContainer>
                        <label> Nome </label>
                        <input placeholder="Nome" type="text" {...register('name')} />
                        <ErrosForm>{errors?.name?.message}</ErrosForm>
                    </InputContainer>

                    <InputContainer>
                        <label> Email </label>
                        <input placeholder="E-mail" type="email" {...register('email')} />
                        <ErrosForm>{errors?.email?.message}</ErrosForm>
                    </InputContainer>

                    <InputContainer>
                        <label> Senha </label>
                        <input placeholder="Senha" type="password" {...register('password')} />
                        <ErrosForm>{errors?.password?.message}</ErrosForm>
                    </InputContainer>

                    <InputContainer>
                        <label> Confirmar senha </label>
                        <input placeholder="Confirmar senha" type="password" {...register('confirmPasswword')} />
                        <ErrosForm>{errors?.confirmPasswword?.message}</ErrosForm>
                    </InputContainer>

                    <Button type='submit' >Criar conta</Button>
                </Fomr>
                <LinkText>Já possui conta? <Link to='/login' >Clique aqui.</Link></LinkText>
            </Container>
        </ContainerBg>
    )
}