import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

import { Menu } from "./menu.model";
import { verticalMenuItems, horizontalMenuItems, adminMenuItems } from "./menu";

@Injectable()
export class MenuService {
  
  verticalMenuItems: any;
  horizontalMenuItems: any;
  userType: any;
  
  constructor(private location: Location, private router: Router) {
    this.userType = localStorage.getItem('userType');
    let temp = [];
    if (this.userType == 'admin') {
      temp.push(
        
        new Menu (1, 'Radar', '/dashboard/statistics', null, 'dashboard', null, false, 0,"white",true),
        // new Menu (10, 'NewRadar', '/radar/statistics', null, 'dashboard', null, false, 0,"white",true),
        new Menu (2, 'Dashboard', '/new-dashboard/overview/astor/dashboard-checklist-audit/astor-pqa', null, 'assignment', null, false, 0,"white",true),
        // new Menu (3, 'Calender', '/calender', null, 'calendar_today', null, false, 0,"white",true),
        new Menu (4, 'Audits', '/audits/checklistaudit', null, 'find_in_page', null, false, 0,"white",true),
        new Menu (2, 'Checklist Setup', '/checklist', null, 'assignment', null, false, 0,"white",true),
        new Menu (5, 'Parameter Setup', '/parameter-setup', null, 'confirmation_number', null, false, 0,"white",true),
        new Menu (6, 'Admin', '/admin', null, 'admin_panel_settings', null, true, 0,"white",true),   
        new Menu (7, 'Users', '/admin/users', null, 'groups', null, false, 6,"white",true), 
        new Menu (8, 'Organisations', '/admin/organisation/location', null, 'event_seat', null, false, 6,"white",true),
        new Menu (9, 'Settings', '/admin/settings', null, 'manage_accounts', null, false, 6,"white",true), 
        new Menu (10, 'Lookup Options', '/admin/lookup-options', null, 'launch', null, false, 6,"white",true), 
        new Menu (11, 'Master Data', '/admin/master-data/model', null, 'horizontal_split', null, false, 6,"white",true),
        );
      } else if (this.userType == 'inspector') {
        temp.push(
          new Menu (1, 'Radar', '/admin/dashboard', null, 'analytics', null, false, 0,"white",true),
          new Menu (2, 'Inspection', '/manage/minspection', null, 'fact_check', null, false, 0,"white", true),           
         
          new Menu (8, 'Users', '/simc/user/users', null, 'people', null, false, 6,"white",true), 
          new Menu (9, 'Settings', '/simc/user/settings', null, 'settings', null, false, 6,"white",true), 
          );
        }else if (this.userType == 'manager') {
          temp.push(
           
            new Menu (1, 'Radar', '/admin/dashboard', null, 'analytics', null, false, 0,"white",true),
            new Menu (2, 'Inspection', '/manage/minspection', null, 'fact_check', null, false, 0,"white", true),           
            new Menu (6, 'Admin', '/admin/admin', null, 'admin_panel_settings', null, true, 0,"white",true),   
            new Menu (7, 'Users', '/admin/admin/users', null, 'people', null, false, 6,"white",true),
            new Menu (9, 'Master Data', '/admin/admin/masterdata/brands', null, 'reorder', null, false, 6,"white",true), 
            new Menu (9, 'Manage News', '/admin/admin/manageNews', null, 'panorama_fish_eye', null, false, 6,"white",true),
            new Menu (11, 'Lookup Options', '/admin/admin/lookup', null, 'search', null, false, 6,"white",true), 
            new Menu (10, 'Settings', '/admin/admin/settings', null, 'settings', null, false, 6,"white",true),  
            );
          }
        
        this.verticalMenuItems = temp;
        this.horizontalMenuItems = temp;
      }
      
      public getVerticalMenuItems(): Array<Menu> {
        return this.verticalMenuItems;
      }
      
      public getHorizontalMenuItems(): Array<Menu> {
        return this.horizontalMenuItems;
      }
      
      public getAdminMenuItems(): Array<Menu> {
        return adminMenuItems;
      }
      
      public expandActiveSubMenu(menu: Array<Menu>) {
        let url = this.location.path();
        let routerLink = url; // url.substring(1, url.length);
        let activeMenuItem = menu.filter((item) => item.routerLink === routerLink);
        if (activeMenuItem[0]) {
          let menuItem = activeMenuItem[0];
          while (menuItem.parentId != 0) {
            let parentMenuItem = menu.filter(
              (item) => item.id == menuItem.parentId
              )[0];
              menuItem = parentMenuItem;
              this.toggleMenuItem(menuItem.id);
            }
          }
        }
        
        public toggleMenuItem(menuId) {
          let menuItem = document.getElementById("menu-item-" + menuId);
          let subMenu = document.getElementById("sub-menu-" + menuId);
          if (subMenu) {
            if (subMenu.classList.contains("show")) {
              subMenu.classList.remove("show");
              menuItem.classList.remove("expanded");
            } else {
              subMenu.classList.add("show");
              menuItem.classList.add("expanded");
            }
          }
        }
        
        public closeOtherSubMenus(menu: Array<Menu>, menuId) {
          let currentMenuItem = menu.filter((item) => item.id == menuId)[0];
          if (currentMenuItem.parentId == 0 && !currentMenuItem.target) {
            menu.forEach((item) => {
              if (item.id != menuId) {
                let subMenu = document.getElementById("sub-menu-" + item.id);
                let menuItem = document.getElementById("menu-item-" + item.id);
                if (subMenu) {
                  if (subMenu.classList.contains("show")) {
                    subMenu.classList.remove("show");
                    menuItem.classList.remove("expanded");
                  }
                }
              }
            });
          }
        }
      }
      