import React from 'react';
import { Component } from "react";
import { DataTable } from "react-data-table-component";
import MyComponent from "./table";
import Header from '../../components/header';
import MenuLeft from '../../components/menu-left';
import '../../components/css/AdminMRC.css';
import '../../components/css/custom-theme.css';
import '../../components/css/reponsive.css';
import '../../components/css/template.css';

export default class Home extends Component {

    render() {
        return (
            <div className="wrapper">
                <Header />
                <MenuLeft />
                <div className="content-wrapper">
                    <section className="content-header">
                        <ol className="breadcrumb">
                            <li><a href="#" className="lb_admin">Admin HOME</a></li>
                        </ol>
                    </section>
                    <section className="content">
                        <div className="box-body ">
                            <div className="mailbox-messages padT10">
                                <label className="control control--checkbox">
                                    <input type="checkbox" checked /><span className="padL10 clr-gray">Only CS</span><div className="control__indicator"></div>
                                </label>
                            </div>
                            <div className="flex-start-using">
                                <div className="checkbox-list">
                                    <label className="control-label lb_type_use">Type Use</label>
                                    <label className="control control--radio" for="rdo_type_k"><input type="radio" id="rdo_type_k" name="type_use" value="1" /><span className="lb_type_k">Keyword</span><div className="control__indicator"></div></label>
                                    <label className="control control--radio" for="rdo_type_s"><input type="radio" id="rdo_type_s" name="type_use" value="2" /><span className="lb_type_s">Sachiko</span><div className="control__indicator"></div></label>
                                    <label className="control control--radio" for="rdo_type_h"><input type="radio" id="rdo_type_h" name="type_use" value="3" checked /><span className="lb_type_h">Houjin</span><div className="control__indicator"></div></label>
                                </div>
                                <div className="checkbox-list">
                                    <label className="control-label lb_type_group">Type Group</label>
                                    <label className="control control--radio" for="rdo_group_all"><input type="radio" id="rdo_group_all" name="type_group" value="0" /><span className="lb_group_all">All</span><div className="control__indicator"></div></label>
                                    <label className="control control--radio" for="rdo_group_main"><input type="radio" id="rdo_group_main" name="type_group" value="1" checked /><span className="lb_group_main">Only main</span><div className="control__indicator"></div></label>
                                </div>
                            </div>
                            <div className="item-flex">
                                <h2 className="text-title">Number client don't using</h2>
                                <div id="tb_dont_using">

                                    {/* <MyComponent /> */}
                                </div>
                            </div>

                            <div className="item-flex">
                                <h2 className="text-title">①利用アカウント数（5回以上キーワード利用）</h2>
                                <div className="" id="tb_using">
                                </div>
                            </div>

                            <div className="item-flex">
                                <h2 className="text-title">②利用アカウント数（5回以上キーワードorサイトレポートクリック）</h2>
                                <div className="" id="tb_using_sr">
                                </div>
                            </div>

                            <div className="item-flex">
                                <h2 className="text-title">List Account Need Action</h2>
                                <div className="" id="tb_account_need_action">
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}