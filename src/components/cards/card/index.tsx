import { Group, Card, Image, Stack, Text, Space, Title } from '@mantine/core';
import styles from './index.module.pcss';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';

const MainCard = () => {
    return (
        <Card radius="md" style={{ border: '1px solid #EEE' }}>
            <Card.Section component="a" href="/#">
                <Image
                    radius="md"
                    src="https://yt3.googleusercontent.com/xYwe4oxcTBclZBq756_76l17iD3UZDOWFDsAZKIP1OKk7g1WuEgqYuVh6jYQGd8CJ88b9R_XSow=s900-c-k-c0x00ffffff-no-rj"
                    alt="news image"
                    h={{
                        base: 70,
                        xs: 100,
                        sm: 150,
                        md: 165,
                        lg: 180,
                        xl: 180
                    }}
                />
            </Card.Section>

            <Card.Section p="md" pt="xs" pb="0" h={120} component="a" href="/#">
                <Text lh="xs" size="md" lineClamp={2} fw="500">Археология в майнкрафт 1.20 вау это что и как</Text>
                <Text lineClamp={3} size="sm" mt="5">Совсем скоро появятся первые функции, связанные с Археологией в Minecraft: узнай о них подробнее в статье....</Text>
            </Card.Section>

            <Card.Section p="md" pt="xs">
                <Group justify="space-between" wrap="nowrap">
                    <Text size="xs" c="#999">25 мая 2023</Text>
                    <Group>
                        <Group gap={5}><FaRegComment color="#999" size={17} /><Text c="#999" fw={500} size="sm">21</Text></Group>
                        <Group gap={5}><AiOutlineLike color="green" size={18} /><Text c="green" fw={500} size="sm">221</Text></Group>
                    </Group>
                </Group>
            </Card.Section>
        </Card>
    );
};

export default MainCard;