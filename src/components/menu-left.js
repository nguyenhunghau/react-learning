import React from 'react';
import { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class MenuLeft extends Component {

    render() {
        return (
            <aside class="main-sidebar">
                <div class="clearfix bg-ico-menu">
                    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button"></a>
                </div>
                <section class="sidebar">
                    <ul class="sidebar-menu">
                        <li>
                            {/* <a href="home"><i class="fa fa-home"></i><span class="lb_menu_home">Home</span></a> */}
                            <Link to="/login">Login</Link>
                        </li>
                        <li><a href="not-assign"><i class="fa fa-user-secret"></i><span class="lb_menu_not_assign">Not Assign</span></a></li>
                        <li><a href="setting-status"><i class="fa fa-gear"></i><span class="lb_menu_setting_status">Setting Status</span></a></li>
                        <li><a href="monthly-using"><i class="fa fa-calendar"></i><span class="lb_menu_monthly_using">Monthly Using</span></a></li>
                        <li><a href="start-using"><i class="fa fa-user-plus"></i><span class="lb_menu_start_using">Start Using</span></a></li>
                        <li><a href="dont-using"><i class="fa fa-user-times"></i><span class="lb_menu_dont_using">Don't using</span></a></li>
                        <li><a href="contract-end"><i class="fa fa-calendar-times-o"></i><span class="lb_menu_dont_using">Contract End</span></a></li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-calendar-times-o"></i><span class="lb_menu_contract">Contract</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                            <ul class="treeview-menu">
                                <li><a href="contract-end"><span class="lb_menu_contract_end">Contract End</span></a></li>
                                <li><a href="contract-status"><span class="lb_menu_contract_status">Contract Status</span></a></li>
                            </ul>
                        </li>
                        <li class="treeview">
                            <a href="#">
                                <i class="fa fa-mortar-board"></i><span class="lb_menu_event">Event</span>
                                <span class="pull-right-container">
                                    <i class="fa fa-angle-left pull-right"></i>
                                </span>
                            </a>
                                    <ul class="treeview-menu">
                                        <li><a href="new-event"><span class="lb_menu_add_event">Add Event</span></a></li>
                                        <li><a href="event-manage"><span class="lb_menu_manage_event">Manage Event</span></a></li>
                                        <li><a href="tags-manage"><span class="lb_menu_manage_tag">Manage Tag</span></a></li>
                                    </ul>
                        </li>
                    <li><a href="email-manage"><i class="fa fa-send"></i><span class="lb_menu_step_mail">Step mail</span></a></li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-reorder"></i><span class="lb_menu_account_demand">Account Demand</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="account-demand"><span class="lb_menu_add_demand">Add Demand</span></a></li>
                            <li><a href="account-demand-manage"><span class="lb_menu_client_demand">Client Demand</span></a></li>
                            <li><a href="demand-manage"><span class="lb_menu_manage_demain">Manage Demand</span></a></li>
                        </ul>
                    </li>
                    <li><a href="nps"><i class="fa fa-commenting"></i><span class="lb_menu_nps">NPS</span></a></li>
                    <li class="treeview">
                        <a href="#">
                            <i class="fa fa-star"></i><span class="lb_menu_up_sell">Up Sell</span>
                            <span class="pull-right-container">
                                <i class="fa fa-angle-left pull-right"></i>
                            </span>
                        </a>
                        <ul class="treeview-menu">
                            <li><a href="account-kick"><span class="lb_menu_account_kick">Account Kick</span></a></li>
                            <li><a href="keyword-summary"><span class="lb_menu_keyword_summany">Keyword Summary</span></a></li>
                            <li><a href="keyword-setting"><span class="lb_menu_keyword_setting">Keyword Setting</span></a></li>
                        </ul>
                    </li>
                    <li><a href="client-question"><i class="fa fa-question"></i><span class="lb_first_checker">First Checker</span></a></li>
                    <li><a href="email-api"><i class="fa fa-envelope"></i><span class="lb_menu_mail_api">Mail API</span></a></li>
                    <li><a href="/faber-extract"><i class="fa fa-external-link"></i><span class="lb_menu_go">Go to Mieruca</span></a></li>
                    <li><a href="unlock-account"><i class="fa fa-unlock"></i><span class="lb_menu_unlock">Unlock Account</span></a></li>
        </ul>
    </section>
</aside >
        )
    }
}