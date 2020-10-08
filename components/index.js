import PartialHeader from "./Header";
import PartialFooter from "./Footer";
import Comment from "@/components/Comment";
import CommentForm from "@/components/CommentForm";
import Avatar from "@/components/Avatar";
import User from "@/components/User";
import Item from "@/components/Item";
import Vue from "vue";

Vue.component('partial-header', PartialHeader);
Vue.component('partial-footer', PartialFooter);
Vue.component('comment', Comment);
Vue.component('comment-form', CommentForm);
Vue.component('avatar', Avatar);
Vue.component('user', User);
Vue.component('item', Item);
