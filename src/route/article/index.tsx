import { Card, Container, Grid, Group, Image, Stack, Text, Title, TypographyStylesProvider } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

import { FaRegComment, FaRegEye, FaRegHeart } from "react-icons/fa";

const Article = () => {
    const isMobile = useMediaQuery('(max-width: 500px)');

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

                        <Stack gap={5}>
                            <Title size={isMobile ? "18" : "24"} fw={500} lineClamp={3}>Последняя версия Майнкрафт новость которую мы заслужили</Title>
                            <Group gap={20}>
                                <Text c="#4b4b4b99" fw={500} size="sm">22:12, 04 янв 2024</Text>
                                <Group gap={5}>
                                    <FaRegEye color="#4b4b4b99" size={19} />
                                    <Text c='#4b4b4b99' fw={500} size="sm">5.4K</Text>
                                </Group>
                                <Group gap={5}>
                                    <FaRegComment color="#4b4b4b99" size={17} />
                                    <Text c="#4b4b4b99" fw={500} size="sm">21</Text>
                                </Group>
                                <Group gap={5}>
                                    <FaRegHeart color="#4b4b4b99" size={17} />
                                    <Text c="#4b4b4b99" fw={500} size="sm">221</Text>
                                </Group>
                            </Group>
                            
                            <Card>
                                <Image 
                                    h={{ base: 50, sm: 50 }}
                                    src="https://yt3.googleusercontent.com/xYwe4oxcTBclZBq756_76l17iD3UZDOWFDsAZKIP1OKk7g1WuEgqYuVh6jYQGd8CJ88b9R_XSow=s900-c-k-c0x00ffffff-no-rj" 
                                    radius="md"
                                />
                            </Card>
                        </Stack>
                    </Container>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Article;