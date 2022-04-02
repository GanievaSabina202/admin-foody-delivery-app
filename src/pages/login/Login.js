import React, { useState } from 'react'
// import { LoginComponentStyled } from './Login.Styled';
// import { useAuth } from '../../../src/context/AuthContext';
// import { EnvelopeClosedIcon, LockClosedIcon } from '@modulz/radix-icons';
import { useForm } from '@mantine/hooks';
import {
    TextInput,
    PasswordInput,
    Button,
    Text,
    LoadingOverlay,
} from '@mantine/core';
import { useAuth } from '../../context/AuthContext';

export const Login = () => {
    const { login, loginError } = useAuth();
    const [systemService, setSystemService] = useState({
        error: null,
        loading: false
    });


    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validationRules: {
            email: (value) => /^\S+@\S+$/.test(value),
        },

        errorMessages: {
            email: 'Invalid email',
        },
    });

    const handleSubmit = async (data) => {
        // data.preventDefault
        setSystemService({
            error: null,
            loading: true,
        })
        await login(data.email, data.password)
        setSystemService({
            error: null,
            loading: false,
        })
        // router.push('/');
    };

    return (
        <div
            style={{
                margin: '5.6rem 1.8rem 0 1.8rem',
                position: 'relative',
            }}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <LoadingOverlay visible={systemService.loading} />
                <TextInput
                    size="lg"
                    mt="md"
                    required
                    placeholder="Your email"
                    label="Email"
                    // icon={<EnvelopeClosedIcon />}
                    {...form.getInputProps('email')}
                />

                <PasswordInput
                    mt="md"
                    size="lg"
                    required
                    placeholder="Password"
                    label="Password"
                    // icon={<LockClosedIcon />}
                    {...form.getInputProps('password')}
                />


                {systemService.error || loginError && (
                    <Text color="red" size="sm" mt="sm">
                        {systemService.error}{loginError}
                    </Text>
                )}

                <Button type="submit" style={{ marginTop: 50 }} fullWidth size="lg">
                    Login
                </Button>
            </form>
        </div>
    )
}
