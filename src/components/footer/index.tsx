import { Anchor, Badge, Container, Group, Text } from '@mantine/core';
import styles from './index.module.pcss';

import { FaYoutube } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="md" p={20}>
                <Group gap={20}>
                    <Text size="xl" fw={500}>PLUG1NS</Text>
                    <Badge bg="green" size="lg" visibleFrom="xs">Плагины Minecraft PE</Badge>

                    <Group>
                        <Anchor>О ПРОЕКТЕ</Anchor>
                    </Group>

                    <Group ml="auto">
                        <FaYoutube size={30} color="#e84118" />
                        <SlSocialVkontakte size={30} color="#0097e6" />
                        <FaTelegram size={30} color="#00a8ff" />
                    </Group>
                </Group>
            </Container>
        </footer>
    );
};

export default Footer;