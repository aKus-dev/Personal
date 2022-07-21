import { Heading, Text, MainLayout } from '../components';

export const NotFoundPage = () => {
    return (
        <MainLayout center>
            <Heading
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.55 }}
                className="text-[5.5rem] font-blanka"
            >
                NOT FOUND
            </Heading>

            <Text
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 1, bounce: 0.55 }}
            >Página no encontrada
            </Text>
        </MainLayout>
    )
}
