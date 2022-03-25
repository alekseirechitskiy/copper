import customSelect from "jquery-custom-select";
// import $ from "jquery";
// import select2 from 'select2';
export default function () {
    $('.filter-item__select').customSelect({
        includeValue: true,
        transition: 200
    });
}