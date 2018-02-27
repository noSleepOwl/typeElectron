import { readFile } from 'fs'
import { remote } from 'electron'
import { appPath } from './app-info'
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
    function WinMove() {

        $("div.box").not('.no-drop').draggable({
            revert: true,
            zIndex: 2000,
            cursor: "crosshair",
            handle: '.box-name',
            opacity: 0.8
        })
            .droppable({
                tolerance: 'pointer',
                drop: function (event, ui) {
                    var draggable = ui.draggable;
                    var droppable = $(this);
                    var dragPos = draggable.position();
                    var dropPos = droppable.position();
                    draggable.swap(droppable);
                    setTimeout(function () {
                        var dropmap = droppable.find('[id^=map-]');
                        var dragmap = draggable.find('[id^=map-]');
                        if (dragmap.length > 0 || dropmap.length > 0) {
                            dragmap.resize();
                            dropmap.resize();
                        }
                        else {
                            draggable.resize();
                            droppable.resize();
                        }
                    }, 50);
                    setTimeout(function () {
                        draggable.find('[id^=map-]').resize();
                        droppable.find('[id^=map-]').resize();
                    }, 250);
                }
            });
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
            link.attr('href', `/html/page/${option.href}`);
        else
            link.attr('href', 'javascript:void(0);')

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
        $.getJSON(`${appPath}/propert/SideBarLeft.json`, function (data: SideBarLeftOption[]) {
            createSideBarLefts(data);
        })
    }
    // 左侧菜单栏效果
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
            LoadAjaxContent(url!);
        }
        if ($(this).attr('href') == '#') {
            e.preventDefault();
        }
    }
    function MessagesMenuWidth() {
        var W = window.innerWidth;
        var W_menu = $('#sidebar-left').outerWidth();
        var w_messages = (W - W_menu!) * 16.666666666666664 / 100;
        $('#messages-menu').width(w_messages);
    }
    // ajax 加载页面信息
    function LoadAjaxContent(url: string) {
        $('.preloader').show();
        $.ajax({
            mimeType: 'text/html; charset=utf-8', // ! Need set mimeType only when run from local file
            url: appPath + url,
            type: 'GET',
            success: function (data) {
                $('#ajax-content').html(data);
                $('.preloader').hide();
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(errorThrown);
            },
            dataType: "html",
            async: false
        });
    }
    /** 重置页面大小属性绑定*/
    export function resizeIndex() {
        var height = window.innerHeight - 49;
        $('#main').css('min-height', height);
    }
    /**侧边栏展示和隐藏快捷 */
    export function showSilder() {
        $('.show-sidebar').on('click', function () {
            $('div#main').toggleClass('sidebar-show');
            setTimeout(MessagesMenuWidth, 250);
        });
    }
}
