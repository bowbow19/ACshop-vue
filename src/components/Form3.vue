<template>
    <div class="form-panel">
        <div class="container form-container">
          <form id="a-form" class="a-form">
            <div class="form-content">
            <div class="part-container">
                <div class="part">
                  <!-- 第三頁 -->
                  <!-- 有力氣再做資料驗證 -->
                  <h4 class="part-title">付款資訊</h4>

                  <div class="form-row card-name">
                    <label for="">持卡人姓名</label>
                    <input type="text" placeholder="John Doe">
                  </div>
                  <div class="form-row card-number">
                    <label for="">卡號</label>
                    <input type="text" placeholder="1111 2222 3333 4444">
                  </div>
                  <div class="form-row card-date">
                    <label for="">有效期限</label>
                    <input type="text" placeholder="MM/YY">
                  </div>
                  <div class="form-row card-cvc">
                    <label for="">CVC/CCV</label>
                    <input type="text" placeholder="123">
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
    </div>
</template>