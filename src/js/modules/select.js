import customSelect from "jquery-custom-select";
export default function () {
    $('.filter-item__select').customSelect({
        includeValue: true,
        transition: 200
    });
}