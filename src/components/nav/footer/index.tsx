import { ActionIcon, Container, Group, Text } from '@mantine/core';
import styles from './index.module.pcss';

import { FaYoutube } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Logo from '../logo';
import { SOCNETLINKS } from '../../../engine/consts';

const Link = ({ type }: { type: 'vk' | 'tg' | 'yt' }) => {
    const icons = {
        vk: <SlSocialVkontakte className={styles.icon__vk} size={30} />,
        yt: <FaYoutube className={styles.icon__yt} size={30} />,
        tg: <FaTelegram className={styles.icon__tg} size={30} />,
    }

    return (
        <NavLink to={SOCNETLINKS[type]} target="_blank" style={{ display: 'flex' }}>
            <ActionIcon bg="#FFF">
                {icons[type]}
            </ActionIcon>
        </NavLink>
    );
};

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="md" p={20}>
                <Group gap={20}>
                    <Group gap={5} align='center'>
                        <Logo isFooter={true} />
                        <Text size="xs" c="#999">2024 г.</Text>
                    </Group>

                    <Group ml="auto" align='end'>
                        <Link type="vk" />
                        <Link type="yt" />
                        <Link type="tg" />
                    </Group>
                </Group>
            </Container>
        </footer>
    );
};

export default Footer;