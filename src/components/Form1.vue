<template>
    <div class="form-panel">
        <div class="container form-container">
          <form id="a-form" class="a-form">
              <div class="form-content">
                <div class="part">
                  <h4 class="part-title">寄送地址</h4>
                  <div class="form-row part-gender">
                    <label for="">稱謂</label>
                    <div class="select-wrapper">
                      <select name="a-type" id="a-type">
                        <option value="">請選擇稱謂</option>
                        <option value="先生">先生</option>
                        <option value="小姐">小姐</option>
                        <option value="不拘">不拘</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row part-name">
                    <label for="">姓名</label>
                    <input id="name" type="text" placeholder="請輸入姓名">
                  </div>
                  <div class="form-row part-phone">
                    <label for="">電話</label>
                    <input id="phone" type="text" placeholder="請輸入行動電話">
                  </div>
                  <div class="form-row part-email">
                    <label for="">Email</label>
                    <input id="email" type="text" placeholder="請輸入電子郵件">
                  </div>
                  <div class="form-row part-city">
                    <label for="">縣市</label>
                    <div class="select-wrapper">
                      <select name="b-type" id="b-type">
                        <!-- 有時間的話，做API縣市資料串接 -->
                        <option value="">請選擇縣市</option>
                        <option value="">北部</option>
                        <option value="">中部</option>
                        <option value="">南部</option>
                        <option value="">中部</option>
                        <option value="">不拘</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row part-add">
                    <label for="">地址</label>
                    <input id="address" type="text" placeholder="請輸入地址">
                  </div>
                </div>
                
              </div>
              <div class="control-panel">
                <button class="btn-primary">
                  下一步
                </button>
              </div>
          </form>
        </div>
    </div>
</template>