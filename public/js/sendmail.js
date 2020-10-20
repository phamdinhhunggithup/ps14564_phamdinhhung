$(function() {

    var fullname = $("#fullname_value");
    var phone = $("#phone_value");
    var address = $("#address_value");
    var note = $("#note_value");
    var formEl = $("#checkout-form");

    addEvent();

    handleCheckExistsFormOrder();

    function handleCheckExistsFormOrder() {
        let infoOrder = JSON.parse(localStorage.getItem('infoOrder'));
        let fullnameEl = $("#fullname_value");
        let phoneEl = $("#phone_value");
        let addressEl = $("#address_value");
        if (infoOrder !== null) {
            fullnameEl.val(infoOrder['fullname']);
            phoneEl.val(infoOrder['phone']);
            addressEl.val(infoOrder['address']);
        } else {
            fullnameEl.val('');
            phoneEl.val('');
            addressEl.val('');
        }
    }

    function addEvent() {
        fullname.blur((e) => {
            handleFullname(e.target.value);
        });

        phone.blur((e) => {
            handlePhone(e.target.value);
        });

        address.blur((e) => {
            handleAddress(e.target.value);
        });

        formEl.submit((e) => {
            event.preventDefault();
            handleSubmitForm();
        });
    }

    function handleFullname(value) {
        let vl_fullname = value;
        let error = null;
        let errorEl = $(".error[data-error-type='fullname']");
        if (vl_fullname.length === 0) {
            error = '(*) Vui lòng nhập họ và tên';
        } else {
            error = '';
        }
        errorEl.text(error);
        if (error.length === 0) {
            return true;
        }
        return false;
    }

    function handlePhone(value) {
        let vl_phone = value;
        let error = null;
        let errorEl = $(".error[data-error-type='phone']");
        if (vl_phone.length === 0) {
            error = '(*) Vui lòng nhập số điện thoại';
        } else {
            if (!checkPhone(vl_phone)) {
                error = '(*) Số điện thoại không đúng định dạng';
            } else {
                error = '';
            }
        }
        errorEl.text(error);
        if (error.length === 0) {
            return true;
        }
        return false;
    }

    function handleAddress(value) {
        let vl_address = value;
        let error = null;
        let errorEl = $(".error[data-error-type='address']");
        if (vl_address.length === 0) {
            error = '(*) Vui lòng nhập địa chỉ';
        } else {
            error = '';
        }
        errorEl.text(error);
        if (error.length === 0) {
            return true;
        }
        return false;
    }


    function checkPhone(vl_phone) {
        if (vl_phone.length !== 10) {
            return false;
        } else {
            let numFirst = parseInt(vl_phone[0]);
            if (numFirst !== 0) {
                return false;
            }
        }
        return true;
    }


    function handleSubmitForm() {
        let vl_fullname = fullname[0].value;
        let vl_phone = phone[0].value;
        let vl_address = address[0].value;
        let vl_note = note[0].value;

        if (handleFullname(vl_fullname) && handlePhone(vl_phone) && handleAddress(vl_address)) {
            vl_note = vl_note.length === 0 ? '' : vl_note;
            let codeOrder = handleGetCodeOrder(vl_phone);
            let color = $(".modal-content .form-order-body .list-color li.active").attr("data-color");
            sendMessageAjaxSendMail(vl_fullname, vl_phone, vl_address, vl_note, codeOrder, color);
        }
    }

    function sendMessageAjaxSendMail(vl_fullname, vl_phone, vl_address, vl_note, codeOrder, color) {
        let popupOrderEl = $(".popup-order");
        let orderingEl = $(".order-process");
        let boxSuccess = $(".order-success");

        let dataSend = { fullname: vl_fullname, phone: vl_phone, address: vl_address, note: vl_note, code: codeOrder, color: color };
        console.log(dataSend);
        $.ajax({
            url: "public/sendMail/sendmail.php",
            method: "POST",
            data: {
                dataSend: dataSend
            },
            beforeSend() {
                popupOrderEl.addClass('open');
                orderingEl.addClass('open');
            },
            dataType: "json",
            success(data) {
                if (data['status'] = 'success') {
                    handleAppendDataBoxSuccess(dataSend['code']);
                    orderingEl.removeClass('open');
                    boxSuccess.addClass('open');
                    setLocalStorage(dataSend);
                } else {
                    setTimeout(() => {
                        alert('Gửi thông tin không thành công');
                    }, 4000);
                }
            },
            error(xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    function handleGetCodeOrder(phone) {
        let numRand = Math.floor(100 + Math.random() * 999);
        return `#${phone[7]}${phone[8]}${phone[9]}${numRand}`;
    }

    function handleAppendDataBoxSuccess(codeOrder) {
        let codeOrderEl = $(".popup-order .order-success span.sub-title strong");
        codeOrderEl.text(codeOrder);
        let btnCloseModal = $(".popup-order .order-success span.pri-title a.close-order-box");
        btnCloseModal.click(() => {
            $(".popup-order").removeClass('open');
            $(".order-success").removeClass('open');
            event.preventDefault();
        });
    }

    function setLocalStorage(data) {
        let infoOrder = {
            'fullname': data['fullname'],
            'phone': data['phone'],
            'address': data['address']
        }
        localStorage.setItem('infoOrder', JSON.stringify(infoOrder));
    }
});