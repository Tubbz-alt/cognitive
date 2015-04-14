var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var AddRow = (function (_super) {
    __extends(AddRow, _super);
    function AddRow() {
        _super.call(this, {
            "name": "Add Row",
            "width": 0,
            "height": 0,
            "input": 1,
            "output": 1
        });
    }
    AddRow.prototype.create_request = function (params) {
        var json_data = {
            user_id: 1,
            token: "aaa",
            experiment: 1,
            row_values: params.values
        };
        var api_url = '/api/v1' + '/operations/row/';
        ComponentBase._send_request(api_url, "POST", json_data, this);
    };
    return AddRow;
})(ComponentBase);
//# sourceMappingURL=add_row.js.map