import { ActionIcon, Anchor, Badge, Container, Group, Mark, Text } from '@mantine/core';
import styles from './index.module.pcss';

import { FaYoutube } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container size="md" p={20}>
                <Group gap={20}>
                    <Group gap={5} align='center'>
                        <Text
                            size="xl"
                            fw={500}
                            variant="gradient"
                            gradient={{
                                from: 'rgba(205,205,205,0.50)',
                                to: 'rgba(0,0,0,0.50)',
                                deg: 90,
                            }}
                            style={{
                                fontFamily: 'MinecraftMain',
                                fontSize: '24px',
                                // textShadow: '1px 1px 3px rgba(0,0,0,.3)'
                            }}
                        >
                            PLUG1NS
                        </Text>
                        <Text size="xs" c="#999">2024 г.</Text>
                    </Group>

                    <Group>
                        {/* <Anchor>О ПРОЕКТЕ</Anchor> */}
                    </Group>

                    <Group ml="auto" align='end'>
                        <NavLink to="https://vk.com/plgns" target="_blank">
                            <ActionIcon bg="#FFF">
                                <SlSocialVkontakte className={styles.icon__vk} size={30} />
                            </ActionIcon>
                        </NavLink>
                        <NavLink to="https://www.youtube.com/channel/UCyND-n_BY0tjk_xKJ0v4IJw" target="_blank">
                            <ActionIcon bg="#FFF">
                                <FaYoutube className={styles.icon__yt} size={30} />
                            </ActionIcon>
                        </NavLink>
                        <NavLink to="https://t.me/plgnpe" target="_blank">
                            <ActionIcon bg="#FFF">
                                <FaTelegram className={styles.icon__tg} size={30} />
                            </ActionIcon>
                        </NavLink>
                    </Group>
                </Group>
            </Container>
        </footer>
    );
};

export default Footer;