import { Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NavLink } from "react-router-dom";

interface ILogo {
    isFooter?: boolean
}

const Logo = ({ isFooter }: ILogo) => {
    const isMobile = useMediaQuery('(max-width: 500px)');

    const title = 'PLUG1NS';

    if(isFooter) {
        return (
            <NavLink to="/" style={{ display: 'flex' }}>
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
                    {title}
                </Text>
            </NavLink>
        );
    }

    return (
        <NavLink to="/" style={{ display: 'flex' }}>
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
                    fontSize: isMobile ? '24px' : '36px',
                    textShadow: '1px 1px 3px rgba(0,0,0,.3)'
                }}
            >
                {title}
            </Text>
        </NavLink>
    );
};

export default Logo;