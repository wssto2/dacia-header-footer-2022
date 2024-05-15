<template>


<div class="plugin-helios-header-footer">
    <div id="helios-header" class="helios-special-elements">
        <nav class="top-nav" data-fplugin="expand-menu" data-fres='["md", "lg"]' data-fopts='{"triggerSelector":".dropdown", "containerSelector":".expand-container", "grouped" : true}'>
            <nav class="top-nav">
                <ul class="module-container">
                    
                    <li v-for="(topMenuItem, topMenuIndex) in topNavigation" :key="topMenuIndex" class="text-uppercase">
                        <a :data-tracking-name="topNavIndexClass" data-tracking-location="Menu top navigation" class="gtm-button" :href="topMenuItem.url" title="" target="_self" rel="nofollow noreferrer">
                            <span>{{ topMenuItem.title }}</span>
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </nav>

        <div data-fplugin="expand-menu" data-fopts='{"triggerSelector":".dropdown", "containerSelector":".expand-container", "grouped" : true}'>
            <div class="page-header--helios" data-fplugin="menu">
                <header class="module-container">
                    <div class="header-part brand-logo">
                        <a :href="basicInformation.site_url" :title="basicInformation.site_title">
                            <img src="https://unpkg.com/@wssto2/rv-dacia-header-footer-cg-bih-new-main/dist/img/dacia-logo.svg" alt="Dacia Logo" />
                        </a>
                    </div>

                    <nav class="header-part menu hidden-xs">
                    
                        <ul class="main-navigation">
                            <li class="visible-xs visible-sm">
                                <a class="home" :href="basicInformation.site_url" title="Početna"> <span class="text-uppercase">Početna</span></a>
                            </li>
                            <DropdownLink
                                v-for="(navigationItem, itemIndex) in mainNavigation" 
                                :key="itemIndex" 
                                :item="navigationItem"
                                :itemIndex="itemIndex"
                                :isActive="dropdownActive === itemIndex"
                                @toggleDropdown="toggleDropdown"
                                />
                            
                        </ul>

                    </nav>
                    <div class="header-part menu-trigger ico-before-menu" data-phf-ico-before="" @click="toggleMobileDropdown"></div>
                </header>

                <nav :class="['mobile-menu', { 'is-active' : mobileDropdown}]">
                    <div class="close-button-container">
                        <div class="close-button menu-trigger" @click="toggleMobileDropdown">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" fill="#FFF" class="eecaeth8 header-t0hq5a e3bhxjg0"><path d="M29.999 2.512L27.5.012 14.999 12.504 2.498.012l-2.497 2.5L12.5 15.001.001 27.488l2.497 2.5 12.501-12.49L27.5 29.988l2.497-2.5-12.499-12.487z"></path></svg>
                            </span>
                        </div>
                    </div>
                    <div class="mobile-menu-container">
                        <div class="mobile-menu-heading">
                            <span>{{ basicInformation.site_title }}</span>
                        </div>
                        <div>
                            <MobileDropdown 
                                :navigation="mainNavigation"
                                @toggleSubDropdown="toggleSubDropdown"
                            />
                        </div>
                        <div class="mobile-menu-bottom-links" v-if="subContentMobileMenu === null">
                            <ul>
                                <li v-for="(topMenuItem, topMenuIndex) in topNavigation" :key="topMenuIndex" class="padding-left-5">
                                    <a :data-tracking-name="topNavIndexClass" data-tracking-location="Menu top navigation" class=" gtm-button " :href="topMenuItem.url" title="" target="_self" rel="nofollow noreferrer">
                                        <span><span v-if="topMenuItem.meta.bold" :style="topMenuItem.meta.yellow ? 'color: #000 !important; background-color: #efdf00;' : ''"><b>{{ topMenuItem.title }}</b></span><span v-else :style="topMenuItem.meta.yellow ? 'color: #000 !important; background-color: #efdf00;' : ''">{{ topMenuItem.title }}</span></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="nav-mask"></div>
            </div>
            <div :class="['menu-popup', { 'is-active' : (Number.isInteger(activeCarCategory)) }]" style="min-height: 938px;">
                <div class="menu-popup_close" data-phf-ico-before="" data-phf-ico-active-before=""></div>
                <div class="menu-popup_inner" v-if="mainNavFirst != 0">

                    <div v-show="activeCarCategory === carPickerIndex" v-for="(carPicker, carPickerIndex) in mainNavFirst" :key="carPickerIndex" class="menu-popup_vehicles-container  is-active" data-popup="595468798" style="left: 390px;">
                        
                        <a :href="carPicker.url" class="menu-popup_vehicle-block">
                            <span class="menu-popup_icon" :data-phf-ico-after="carPicker.icon"></span>
                            <span class="menu-popup_vehicle-name">{{carPicker.title}}</span>
                        </a>
                        <a  v-for="(carElement, carElementIndex) in carPicker.children" :key="carElementIndex" :href="carElement.url" target="_self" class="menu-popup_vehicle-block">
                            <span class="menu-popup_img">
                                <img :src="carElement.icon">
                            </span>
                            <span class="menu-popup_vehicle-name">{{carElement.title}}</span>
                        </a>
                    </div>                                
                    
                </div>
            </div>
            <div class="menu-popup_mask"></div>
        </div>

        <nav class="progress-nav helios-special-elements"></nav>

        <Dropdown 
                v-for="(navigationItem, itemIndex) in mainNavigation" 
                :key="itemIndex" 
                :item="navigationItem"
                :itemIndex="itemIndex"
                :dropdownActiveType="dropdownActive"
            />
    </div>
</div>

</template>

<script>
    import axios from 'axios';
    import Dropdown from "@/components/Dropdown";
    import DropdownLink from "@/components/DropdownLink"
    import MobileDropdown from "@/components/MobileDropdown"

    export default {
        components: { Dropdown, DropdownLink, MobileDropdown },
        name: 'Header',
        created() {
            if ("HEADER_FOOTER_SETTINGS" in window) {
                this.fetchNavigation(window.HEADER_FOOTER_SETTINGS.apiUri);
            } else {
                if (this.url) {
                    this.fetchNavigation(this.url);
                }
            }

            window.addEventListener('click', this.del)
        },
        data() {
            return {
                image: require('@/assets/images/dacia-logo.svg'),
                expanded: false,
                mobileDropdown: false,
                activeCarCategory: null,
                basicInformation: [],
                topNavigation: [],                 
                mainNavigation: [],
                dropdownActive: null,
                subContentMobileMenu: null,
            }
        },
        beforeDestroy() {
            window.removeEventListener('click', this.del)
        },

        computed: {
            topNavIndexClass(){
                return true
            },
            
            mainNavFirst() {
                return  this.mainNavigation && this.mainNavigation[0] && this.mainNavigation[0].children;
            }
        },
        methods: {
            toggleDropdown(index) {
                this.dropdownActive = this.dropdownActive === index ? null : index;
            },

            toggleSubDropdown(index) {
                this.subContentMobileMenu = index;
            },

            fetchNavigation(apiUri) {
                axios.get(apiUri)
                    .then((response) => {
                        this.basicInformation = response.data;
                        this.topNavigation = response.data.top_navigation.schema;
                        this.mainNavigation = response.data.main_navigation.schema;
                    })
            },
            toggleMobileDropdown(){
                this.mobileDropdown = !this.mobileDropdown
            },
        }
    }
</script>

<style scoped>
    @import './assets/css/main.css';

    @font-face{
        font-family: Read-Bold;
        font-weight:normal;
        font-display:swap;
        src:url(./assets/fonts/Read-Bold_V3000.woff2) format("woff2")
    }
    @font-face{
        font-family: Read-Regular;
        font-weight:normal;
        font-display:swap;
        src:url(./assets/fonts/Read-Regular_V3000.woff2) format("woff2")
    }
    @font-face{
        font-family: DaciaBlock-Bold;
        font-weight:normal;
        font-display:swap;
        src:url(./assets/fonts/DaciaBlock-Bold.woff2) format("woff2")
    }
    @font-face{
        font-family:Pictos;
        font-style: normal;
        font-weight: 400;
        src:url(./assets/fonts/PictosComplete-Regular.woff) format("woff")
    }
</style>
