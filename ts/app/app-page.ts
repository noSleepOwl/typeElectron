import { readFile } from 'fs'
import { remote } from 'electron'
export namespace indexPage {
    let menuHtmlEle = `
    <li>
        <a  class=" ajax-link">
        <i ></i>
        <span class="hidden-xs"></span>
        </a>
    </li>`;
    //左侧菜单栏配置对象接口
    interface SideBarLeftOption {
        //名称,对应的形式展示的名称
        name: string;
        // 对应的图标
        icon?: string;
        // 对应的连接地址
        href?: string;
        // 子菜单
        children?: SideBarLeftOption[]
    }
    /** 获取应用的根目录(未编译过,无法尝试 对错)*/
    function getPath(): string {
        let path = remote.app.getPath('exe');
        let index = path.indexOf('node_modules');
        return path.substr(0, index);
    }
    /**
     * 通过配置信息创建菜单
     * @param option 左侧菜单配置信息
     * @param parent 是否有指定的父级菜单 , 如果没有 默认的是 .nav.main-menu元素
     */
    function createSideBarLefts(option: SideBarLeftOption[], parent?: JQuery): JQuery {
        let length = option.length;
        let mainMenu = $('.nav.main-menu')

        if (mainMenu.length > 0) {
            for (let i = 0; i < length; i++) {
                let chil = createSideBarLeft(option[i]);
                if (parent) {
                    parent.find('ul.dropdown-menu').append(chil)
                } else {
                    mainMenu.append(chil);
                }
            }
            return mainMenu;
        } else {
            return $();
        }
    }
    function createSideBarLeft(option: SideBarLeftOption): JQuery {
        let ele = $(menuHtmlEle);
        let link = $('a', ele);
        let icon = $('i', ele);
        let nameTag = $('span', ele);
        if (option.href)
            link.attr('href', option.href)

        nameTag.text(option.name);
        if (option.icon)
            icon.addClass(option.icon);
        else
            icon.remove();
        if (option.children && option.children.length > 0) {
            ele.append($(`<ul class="dropdown-menu"></ul>`));
            ele.addClass('dropdown');
            link.addClass('dropdown-toggle').attr('href', '#');
            createSideBarLefts(option.children, ele);
        }
        return ele;
    }
    /** 
     * 通过json 文件创建菜单
    */
    export function loadSideBarLeft() {
        $.getJSON(getPath() + 'propert/SideBarLeft.json', function (data: SideBarLeftOption[]) {
            createSideBarLefts(data);
        })
        /*  readFile("", { encoding: '', flag: '' }, (err: NodeJS.ErrnoException, data: string | Buffer) => {
             let option = <SideBarLeftOption[]>eval('(' + data + ')');
             console.log(option)
         }); */
    }
    export function leftPageClick(this: HTMLElement, e: JQuery.Event) {
        //a 标签的 父级li 
        var parents = $(this).parents('li');
        //第一个 父级 li.dropdown
        var li = $(this).closest('li.dropdown');
        //其他的li 标签
        var another_items = $('.main-menu li').not(parents);
        //关闭其他的标签
        another_items.find('a').removeClass('active');
        another_items.find('a').removeClass('active-parent');
        if ($(this).hasClass('dropdown-toggle') || $(this).closest('li').find('ul').length == 0) {
            $(this).addClass('active-parent');
            var current = $(this).next();
            if (current.is(':visible')) {
                li.find("ul.dropdown-menu").slideUp('fast');
                li.find("ul.dropdown-menu a").removeClass('active')
            }
            else {
                another_items.find("ul.dropdown-menu").slideUp('fast');
                current.slideDown('fast');
            }
        }
        else {
            if (li.find('a.dropdown-toggle').hasClass('active-parent')) {
                var pre = $(this).closest('ul.dropdown-menu');
                pre.find("li.dropdown").not($(this).closest('li')).find('ul.dropdown-menu').slideUp('fast');
            }
        }
        if ($(this).hasClass('active') == false) {
            $(this).parents("ul.dropdown-menu").find('a').removeClass('active');
            $(this).addClass('active')
        }
        if ($(this).hasClass('ajax-link')) {
            e.preventDefault();
            if ($(this).hasClass('add-full')) {
                $('#content').addClass('full-content');
            }
            else {
                $('#content').removeClass('full-content');
            }
            var url = $(this).attr('href');
            // window.location.hash = url;
            // LoadAjaxContent(url);
        }
        if ($(this).attr('href') == '#') {
            e.preventDefault();
        }
    }
    export function resizeIndex() {
        var height = window.innerHeight - 49;
        $('#main').css('min-height', height);
    }
}
