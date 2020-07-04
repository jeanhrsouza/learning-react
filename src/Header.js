import React from 'react';

const Header = () => {
    return (
        <nav>
            <div class="nav-wrapper indigo lighthen-2">
                <a href="/" class="brand-logo">Casa do Código</a>
                <ul class="right hide-on-med-and-down">
                    <li><a href="/autores">Autores</a></li>
                    <li><a href="/livros">Livros</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;