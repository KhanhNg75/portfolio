import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

import { Header as H } from "@styles";
import { Wrapper as W } from "@styles";
import { Flex } from "@styles/components/Flex";

export const Header: React.FC = () => {
    const router = useRouter();
    const [isVisible, setisVisible] = useState(false);

    const toggleMenu = () => {
        setisVisible(!isVisible);
    };

    const resetMenu = () => {
        setisVisible(false);
    };

    return (
        <W.Container header>
            <Flex
                headerContent
                justifyContent="space-between"
                alignItems="center"
            >
                <H.Logo>Khanh Nguyen</H.Logo>
                <W.Container>
                    <H.MenuHamburger
                        onClick={() => {
                            toggleMenu();
                        }}
                    >
                        {!isVisible ? <MenuIcon /> : <CloseIcon />}
                    </H.MenuHamburger>
                    <H.MenuContent active={isVisible}>
                        <H.MenuItem
                            className={router.pathname == "/" ? "active" : ""}
                        >
                            <Link href="/">
                                <a onClick={resetMenu}>Home</a>
                            </Link>
                        </H.MenuItem>
                        <H.MenuItem
                            className={
                                router.pathname == "/resume" ? "active" : ""
                            }
                        >
                            <Link href="/resume">
                                <a onClick={resetMenu}>Resume</a>
                            </Link>
                        </H.MenuItem>
                        <H.MenuItem
                            className={
                                router.pathname == "/portfolio" ? "active" : ""
                            }
                        >
                            <Link href="/portfolio">
                                <a onClick={resetMenu}>Portfolio</a>
                            </Link>
                        </H.MenuItem>
                        <H.MenuItem
                            className={
                                router.pathname == "/contact" ? "active" : ""
                            }
                        >
                            <Link href="/contact">
                                <a onClick={resetMenu}>Contact</a>
                            </Link>
                        </H.MenuItem>
                    </H.MenuContent>
                </W.Container>
                <H.Copyright>
                    © 2022 Khanh Nguyen. <br />
                    All rights reserved.
                </H.Copyright>
            </Flex>
        </W.Container>
    );
};
