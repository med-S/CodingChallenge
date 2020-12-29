import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import GitHubIcon from '@material-ui/icons/GitHub';

export class NavMenu extends Component {
    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                    <Container>
                        <span>
                            <GitHubIcon style={{ fontSize: "30px" }} />
                            <NavbarBrand style={{ marginLeft: "5px" }} tag={Link} to="/">GitHub Trending Repositories</NavbarBrand>
                        </span>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
