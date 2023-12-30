import { Badge, Burger, Container, Drawer, Group, Image, ScrollArea, Stack, Tabs, Text, rem } from '@mantine/core';
import styles from './index.module.pcss';

import { get as getItem } from 'minecraft-icon-items';
import { useNavigate, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

const getImage = (id: number | string) => {
    return <Image h="20" w="20" src={`data:image/png;base64,${getItem(id).icon}`} />;
}

const TabsList = () => {
    const navigate = useNavigate();
    const { tabValue } = useParams();

    return (
        <Tabs
            color="green"
            defaultValue="news"
            value={tabValue}
            onChange={(value) => navigate(`/${value}`)}
        >
            <ScrollArea scrollbars="x">
                <Tabs.List grow>
                    <Tabs.Tab value="news" leftSection={getImage(347)}>
                        Новости
                    </Tabs.Tab>
                    <Tabs.Tab value="plugins" leftSection={getImage(264)}>
                        Плагины
                    </Tabs.Tab>
                    <Tabs.Tab value="teach" leftSection={getImage(340)}>
                        Обучение
                    </Tabs.Tab>
                    <Tabs.Tab value="code" leftSection={getImage(101)}>
                        Код
                    </Tabs.Tab>
                </Tabs.List>
            </ScrollArea>
        </Tabs>
    );
};

const Header = () => {
    const [opened, { toggle, close }] = useDisclosure(false);

    return (
        <header className={styles.header}>
            <Drawer
                opened={opened}
                onClose={close}
                title="Header is sticky"
                scrollAreaComponent={ScrollArea.Autosize}
            >
                menu
            </Drawer>
            <Container size="md">
                <Stack gap={0}>
                    <Group p={20} justify="center" align="center" wrap="nowrap">
                        <Text size="xl" fw={500}>PLUG1NS</Text>
                        <Badge bg="green" size="lg" visibleFrom="xs">Плагины Minecraft PE</Badge>
                        {getImage(2)}
                        <Burger pos="absolute" right={10} top={10} opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
                    </Group>
                    <Group gap={10} justify="center">
                        <TabsList />
                    </Group>
                </Stack>
            </Container>
        </header>
    );
};

export default Header;