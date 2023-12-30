import { Container, Divider, Grid, Group, Image, Paper, Pill, Space, Stack, Text } from "@mantine/core";
import Footer from "../../components/footer";
import Header from "../../components/header";

import { FaRegComment } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import Editor from "../../components/editor";


const Main = () => {
    return (
        <div>
            <Header />
            <Editor />
                <Container size="md">
                    <Text>Новости</Text>
                    <Grid>
                        <Grid.Col span={8} style={{ borderRight: '1px solid #DDD' }} mt={10} mb={10}>
                            <Container p={10}>
                                <Grid>
                                    <Grid.Col span={12}>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Paper radius="md">
                                            <Image radius="md" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/03/Minecraft-Bess.png" />
                                            <Stack p="10 15" gap={0}>
                                                <Text size="sm" fw={500}>Археология в майнкрафт 1.20 вау это что</Text>
                                                <Space h={5} />
                                                <Text size="sm">Совсем скоро появятся первые функции, связанные с Археологией в Minecraft: узнай о них подробнее в статье....</Text>
                                                <Space h={10} />
                                                <Group justify="space-between">
                                                    <Text size="xs" c="#999">25 мая 2023</Text>
                                                    <Group>
                                                        <Group gap={5}><FaRegComment color="#999" size={17} /><Text c="#999" fw={500} size="sm">21</Text></Group>
                                                        <Group gap={5}><AiOutlineLike color="green" size={18} /><Text c="green" fw={500} size="sm">221</Text></Group>
                                                    </Group>
                                                </Group>
                                            </Stack>
                                        </Paper>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Paper radius="md">
                                            <Image radius="md" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/03/Minecraft-Bess.png" />
                                            <Stack p="10 15" gap={0}>
                                                <Text size="sm" fw={500}>Археология в майнкрафт 1.20 вау это что</Text>
                                                <Space h={5} />
                                                <Text size="sm">Совсем скоро появятся первые функции, связанные с Археологией в Minecraft: узнай о них подробнее в статье....</Text>
                                                <Space h={10} />
                                                <Group justify="space-between">
                                                    <Text size="xs" c="#999">25 мая 2023</Text>
                                                    <Group>
                                                        <Group gap={5}><FaRegComment color="#999" size={17} /><Text c="#999" fw={500} size="sm">21</Text></Group>
                                                        <Group gap={5}><AiOutlineLike color="green" size={18} /><Text c="green" fw={500} size="sm">221</Text></Group>
                                                    </Group>
                                                </Group>
                                            </Stack>
                                        </Paper>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Paper radius="md">
                                            <Image radius="md" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/03/Minecraft-Bess.png" />
                                            <Stack p="10 15" gap={0}>
                                                <Text size="sm" fw={500}>Археология в майнкрафт 1.20 вау это что</Text>
                                                <Space h={5} />
                                                <Text size="sm">Совсем скоро появятся первые функции, связх подробнее в статье....</Text>
                                                <Space h={10} />
                                                <Group justify="space-between">
                                                    <Text size="xs" c="#999">25 мая 2023</Text>
                                                    <Group>
                                                        <Group gap={5}><FaRegComment color="#999" size={17} /><Text c="#999" fw={500} size="sm">21</Text></Group>
                                                        <Group gap={5}><AiOutlineLike color="green" size={18} /><Text c="green" fw={500} size="sm">221</Text></Group>
                                                    </Group>
                                                </Group>
                                            </Stack>
                                        </Paper>
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Paper radius="md">
                                            <Image radius="md" src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/03/Minecraft-Bess.png" />
                                            <Stack p="10 15" gap={0}>
                                                <Text size="sm" fw={500}>Археология в майнкрафт 1.20 вау это что</Text>
                                                <Space h={5} />
                                                <Text size="sm">Совсем скоро появятся первые функции, связанные с Археологией в Minecraft: узнай о них подробнее в статье....</Text>
                                                <Space h={10} />
                                                <Group justify="space-between">
                                                    <Text size="xs" c="#999">25 мая 2023</Text>
                                                    <Group>
                                                        <Group gap={5}><FaRegComment color="#999" size={17} /><Text c="#999" fw={500} size="sm">21</Text></Group>
                                                        <Group gap={5}><AiOutlineLike color="green" size={18} /><Text c="green" fw={500} size="sm">221</Text></Group>
                                                    </Group>
                                                </Group>
                                            </Stack>
                                        </Paper>
                                    </Grid.Col>
                                </Grid>
                            </Container>
                        </Grid.Col>
                        <Grid.Col span={4}>
                            <Container p={10}>
                                <Stack>
                                    sdfasdfsadfasfdasdf sdf asfasdfasafdsafasfd
                                </Stack>
                            </Container>
                        </Grid.Col>
                    </Grid>
                </Container>
            <Footer />
        </div>
    );
};

export default Main;