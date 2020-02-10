import React from 'react';
import { Component } from "react";

export default class Footer extends Component {

    render() {
        return (
            <footer class="main-footer">
                <div class="bottom-mieruca">
                    <div class="container-fluid padd_none">
                        <ul class="ls-bottom clearfix">
                        </ul>
                    </div>
                </div>
                <ul class="ls-nav">
                    <li><a href="https://app.mieru-ca.com/faber-extract/privacy-policy" class="lb_privacy">Privacy Policy</a></li>
                    <li><a href="https://app.mieru-ca.com/faber-extract/terms-of-service" class="lb_term">Terms</a></li>
                    <li><a href="https://app.mieru-ca.com/faber-extract/guide" class="lb_condition">Conditions</a></li>
                </ul>
                <p class="lb_footer">2017 &copy; Faber Company, Inc. All Rights Reserved.</p>
            </footer>
        )
    }
}