import { ActionIcon, ActionIconGroup, Card, Center, Container, Divider, Grid, Group, Image, Input, MantineProvider, MantineThemeContext, MantineThemeProvider, Menu, Pagination, Paper, Pill, Space, Stack, Text, Title, createTheme, stylesToString } from "@mantine/core";
import Footer from "../../components/nav/footer";
import Header from "../../components/nav/header";

import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import Editor from "../../components/editor";
import MainCard from "../../components/cards/card";
import { useMediaQuery, useViewportSize } from "@mantine/hooks";
import { FaFilter } from "react-icons/fa";

import { FaSortAmountDown } from "react-icons/fa";
import useMinecraftImage from "../../hooks/minecraft-items/use-mc-image";

import styles from './index.module.pcss';

import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";


const Main = () => {
    const isMobile = useMediaQuery('(max-width: 500px)');

    const { getImage } = useMinecraftImage();

    const theme = createTheme({
        components: {
            ActionIcon: ActionIcon.extend({
                classNames: {
                    root: styles.action__icon
                },
                defaultProps: {
                    size: 'xl',
                    radius: 'md',
                    bg: '#FFF'
                }
            }),
            Text: Text.extend({
                defaultProps: {
                    c: "#999",
                    fw: "500"
                },
                classNames: {
                    root: styles.action__text
                },
            })
        }
    });

    return (
        <Container size="lg">
            <Grid>
                <Grid.Col
                    span={{
                        base: 12,
                        // md: 8
                    }}
                    style={{
                        // borderRight: '1px solid #DDD'
                    }}
                    mt={10}
                    mb={10}
                >
                    <Container p={10}>
                        {/* Фильтр */}

                        <Group justify="space-between">
                            <Title size="24" fw={500}>Новости</Title>
                            <Group gap={5}>
                                <Menu shadow="md" width={200} position="left-start" transitionProps={{ transition: 'pop-top-right', duration: 150 }}>
                                    <Menu.Target>
                                        <ActionIcon bg="#FFF" w={"auto"} p={"0 5"} radius="md" style={{ boxShadow: '0 0 2px rgba(0,0,0,.3)' }}>
                                            {getImage(381)}
                                            <Space w="5" />
                                            <FaSortAmountDown color="#2c3e50" />
                                        </ActionIcon>
                                    </Menu.Target>
                                    
                                    <Menu.Dropdown>
                                        <Menu.Label>Сортировать</Menu.Label>
                                        <Menu.Item leftSection={getImage(264)}>
                                            По популярности
                                        </Menu.Item>
                                        <Menu.Item leftSection={getImage(347)}>
                                            По дате
                                        </Menu.Item>
                                        <Menu.Item leftSection={getImage(381)} rightSection={<FaSortAmountDown color="#2c3e50" />}>
                                            По просмотрам
                                        </Menu.Item>
                                        <Menu.Item leftSection={getImage(339)}>
                                            По комментариям
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                            </Group>
                        </Group>

                        {/* Карточки новостей */}

                        <Grid>
                            <Grid.Col span={12}>
                            </Grid.Col>

                            <Grid.Col span={{ 
                                base: isMobile ? 12 : 6,
                                xs: 6,
                                sm: 4,
                                //md: 6
                            }}>
                                <MainCard />
                            </Grid.Col>
                            <Grid.Col span={{ 
                                base: isMobile ? 12 : 6,
                                xs: 6,
                                sm: 4,
                                //md: 6
                            }}>
                                <MainCard />
                            </Grid.Col>
                            <Grid.Col span={{ 
                                base: isMobile ? 12 : 6,
                                xs: 6,
                                sm: 4,
                                //md: 6
                            }}>
                                <MainCard />
                            </Grid.Col>
                            <Grid.Col span={{ 
                                base: isMobile ? 12 : 6,
                                xs: 6,
                                sm: 4,
                                //md: 6
                            }}>
                                <MainCard />
                            </Grid.Col>
                        </Grid>

                        {/* Пагинация */}
                        {/* <MantineThemeProvider theme={theme}>
                            <Pagination.Root total={15} mt="lg" boundaries={1} size="sm" radius="md" color="green">
                                <Group gap={5} justify="center">
                                    <Pagination.Previous />
                                    <Pagination.Items />
                                    <Pagination.Next />
                                </Group>
                            </Pagination.Root>
                        </MantineThemeProvider> */}
                        <Center>
                            <MantineThemeProvider theme={theme}>
                                <ActionIconGroup mt="lg">
                                    <ActionIcon><GrFormPrevious color="#999" size="24" /></ActionIcon>
                                    <ActionIcon><Text>1</Text></ActionIcon>
                                    <ActionIcon className={styles.action__active}><Text>2</Text></ActionIcon>
                                    <ActionIcon><Text>3</Text></ActionIcon>
                                    <ActionIcon><Text>4</Text></ActionIcon>
                                    <ActionIcon><Text>...</Text></ActionIcon>
                                    <ActionIcon><Text>20</Text></ActionIcon>
                                    <ActionIcon><GrFormNext color="#999" size="24" /></ActionIcon>
                                </ActionIconGroup>
                            </MantineThemeProvider>
                        </Center>
                    </Container>
                </Grid.Col>
                {/* <Grid.Col span={{
                    md: 4
                }} visibleFrom="md">
                    <Container p={10}>
                        <Stack>
                            sdfasdfsadfasfdasdf sdf asfasdfasafdsafasfd
                        </Stack>
                    </Container>
                </Grid.Col> */}
            </Grid>
        </Container>
    );
};

export default Main;