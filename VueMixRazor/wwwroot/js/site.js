import Vue from 'vue';


import CustomerCreateOrEdit from "./components/customers/CustomerCreateOrEdit";

Vue.component('customer-create-or-edit', CustomerCreateOrEdit);

Vue.prototype.getFieldName = function (fieldName, index, propertyName) {
    return `${fieldName}[${index}].${propertyName}`;
};

if (document.getElementById("vue-root") !== null) {
    new Vue({
        el: '#vue-root'
    });
}

