"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
var indexPage;
(function (indexPage) {
    let menuHtmlEle = `
    <li>
        <a  class=" ajax-link">
        <i ></i>
        <span class="hidden-xs"></span>
        </a>
    </li>`;
    /** 获取应用的根目录(未编译过,无法尝试 对错)*/
    function getPath() {
        let path = electron_1.remote.app.getPath('exe');
        let index = path.indexOf('node_modules');
        return path.substr(0, index);
    }
    /**
     * 通过配置信息创建菜单
     * @param option 左侧菜单配置信息
     * @param parent 是否有指定的父级菜单 , 如果没有 默认的是 .nav.main-menu元素
     */
    function createSideBarLefts(option, parent) {
        let length = option.length;
        let mainMenu = $('.nav.main-menu');
        if (mainMenu.length > 0) {
            for (let i = 0; i < length; i++) {
                let chil = createSideBarLeft(option[i]);
                if (parent) {
                    parent.find('ul.dropdown-menu').append(chil);
                }
                else {
                    mainMenu.append(chil);
                }
            }
            return mainMenu;
        }
        else {
            return $();
        }
    }
    function createSideBarLeft(option) {
        let ele = $(menuHtmlEle);
        let link = $('a', ele);
        let icon = $('i', ele);
        let nameTag = $('span', ele);
        if (option.href)
            link.attr('href', option.href);
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
    function loadSideBarLeft() {
        $.getJSON(getPath() + 'propert/SideBarLeft.json', function (data) {
            createSideBarLefts(data);
        });
        /*  readFile("", { encoding: '', flag: '' }, (err: NodeJS.ErrnoException, data: string | Buffer) => {
             let option = <SideBarLeftOption[]>eval('(' + data + ')');
             console.log(option)
         }); */
    }
    indexPage.loadSideBarLeft = loadSideBarLeft;
    function leftPageClick(e) {
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
                li.find("ul.dropdown-menu a").removeClass('active');
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
            $(this).addClass('active');
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
    indexPage.leftPageClick = leftPageClick;
    function resizeIndex() {
        var height = window.innerHeight - 49;
        $('#main').css('min-height', height);
    }
    indexPage.resizeIndex = resizeIndex;
})(indexPage = exports.indexPage || (exports.indexPage = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cy9hcHAvYXBwLXBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx1Q0FBaUM7QUFDakMsSUFBaUIsU0FBUyxDQXFJekI7QUFySUQsV0FBaUIsU0FBUztJQUN0QixJQUFJLFdBQVcsR0FBRzs7Ozs7O1VBTVosQ0FBQztJQVlQLDRCQUE0QjtJQUM1QjtRQUNJLElBQUksSUFBSSxHQUFHLGlCQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Q7Ozs7T0FJRztJQUNILDRCQUE0QixNQUEyQixFQUFFLE1BQWU7UUFDcEUsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUVsQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDOUIsSUFBSSxJQUFJLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1QsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDaEQsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztv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