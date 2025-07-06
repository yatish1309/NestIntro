'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-intro documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' :
                                            'id="xs-controllers-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' :
                                        'id="xs-injectables-links-module-AppModule-3e54a8d2d86c5ef0e94889dd1edeeb22751cd3eb1b6eba9b532c46580baf081dbd5ddd79c7550a59fd89540032788271db99711ac80774b699cfe871bc6bcb0f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' :
                                            'id="xs-controllers-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' :
                                        'id="xs-injectables-links-module-AuthModule-a3db6177b878bd8995f91477e1399f03a2535e0fe7959ed805b30b4b90a2cbb917bb77b7e607f5b1bafa0d26137dfe4639202be2626219cb684ef0dffa1bf1e3"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' : 'data-bs-target="#xs-controllers-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' :
                                            'id="xs-controllers-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' : 'data-bs-target="#xs-injectables-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' :
                                        'id="xs-injectables-links-module-PostsModule-8e03ac42ef46ae3f0458e3c64d3f4007b49cd6c19fe057f6bc678f226d4bf29adc0bad5e94be0d541b548601e81384005308e1ec487ff67200862d130b683eb8"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' : 'data-bs-target="#xs-controllers-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' :
                                            'id="xs-controllers-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' : 'data-bs-target="#xs-injectables-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' :
                                        'id="xs-injectables-links-module-UserModule-0bd7627c7aa1ce0b499798df6d5863f641cac62a6de3885d2a0a6cc96a39fbc1dd6d951a5802bd0ae34e7117f99d60365d0013b132f673e4e0852cb776832a5b"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostsMetaOptionsDto.html" data-type="entity-link" >CreatePostsMetaOptionsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUsersParamDto.html" data-type="entity-link" >GetUsersParamDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostsDto.html" data-type="entity-link" >PatchPostsDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDto.html" data-type="entity-link" >PatchUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});