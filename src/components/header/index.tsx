import { ActionIcon, Badge, Burger, Container, Divider, Drawer, Group, Image, ScrollArea, Space, Stack, Tabs, Text, VisuallyHidden, rem } from '@mantine/core';
import styles from './index.module.pcss';

import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDisclosure, useHeadroom } from '@mantine/hooks';

import useMinecraftImage from '../../hooks/minecraft-items/use-mc-image';
import { FaYoutube } from 'react-icons/fa';

import clockImage from '/assets/images/minecraft-clock.gif';

// const getImage = (id: number | string) => {
//     return <Image h="20" w="20" src={`data:image/png;base64,${getItem(id).icon}`} />;
// }

import { Carousel } from '@mantine/carousel';
 

const TabsList = () => {
    const navigate = useNavigate();
    const { tabValue } = useParams();

    const { getImage } = useMinecraftImage();

    return (
        <Carousel slideSize="70%" height={200} slideGap="md">
            {/* ...slides */}
        </Carousel>
        // <Tabs
        //     color="green"
        //     defaultValue="news"
        //     value={tabValue}
        //     onChange={(value) => navigate(`/${value}`)}
        // >
        //         <Tabs.List grow>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             <Tabs.Tab value="news" leftSection={getImage(347)}>
        //                 Новости
        //             </Tabs.Tab>
        //             {/* <Tabs.Tab value="plugins" leftSection={getImage(264)}>
        //                 Плагины
        //             </Tabs.Tab>
        //             <Tabs.Tab value="teach" leftSection={getImage(340)}>
        //                 Обучение
        //             </Tabs.Tab>
        //             <Tabs.Tab value="code" leftSection={getImage(101)}>
        //                 Код
        //             </Tabs.Tab> */}
        //         </Tabs.List>
        // </Tabs>
    );
};

const Header = () => {
    const [opened, { toggle, close }] = useDisclosure(false);

    const { getImage } = useMinecraftImage();

    const pinned = useHeadroom({ fixedAt: 120 });

    return (<>
        <header
            className={styles.header} 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000000,
                transform: `translate3d(0, ${pinned ? 0 : rem(-60)}, 0)`,
                transition: 'transform 400ms ease',
                backgroundColor: 'var(--mantine-color-body)'
            }}
        >
            <Drawer
                opened={opened}
                onClose={close}
                title="Header"
                scrollAreaComponent={ScrollArea.Autosize}
            >
                Новости
            </Drawer>
            
            <Container size="md">
                <Stack gap={0}>
                    <Group p={'0 20'} justify="space-between" align="center" wrap="nowrap">
                        <Group wrap='nowrap'>
                            <Text
                                size="xl"
                                fw={500}
                                variant="gradient"
                                gradient={{
                                    from: '#00bf8f',
                                    to: '#001510',
                                    deg: 90,
                                }}
                                style={{
                                    fontFamily: 'MinecraftMain',
                                    fontSize: '36px',
                                    textShadow: '1px 1px 3px rgba(0,0,0,.3)'
                                }}
                            >
                                PLUG1NS
                            </Text>

                            <Divider orientation='vertical' h="20px" mt="18" />

                            <Text size="md" tt="uppercase" visibleFrom="xs">плагины Minecraft PE</Text>
                            <Image src={clockImage} h="20" />
                        </Group>
                        <Group>
                            <NavLink to="https://www.youtube.com/channel/UCyND-n_BY0tjk_xKJ0v4IJw" target="_blank"><ActionIcon bg="#FFF"><FaYoutube size={30} color="#e84118" /></ActionIcon></NavLink>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="md" />
                        </Group>
                    </Group>
                    <Group gap={10} justify="center" visibleFrom="xs" >
                        <TabsList />
                    </Group>
                </Stack>
            </Container>
        </header><Space h={100} visibleFrom="xs" /><Space h={60} hiddenFrom="xs" /></>
    );
};

export default Header;