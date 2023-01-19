function Registration() {
  return (
    <div class="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div class="wrapper wrapper--w790">
        <div class="card card-5">
          <div class="card-heading">
            <h2 class="title">Event Registration Form</h2>
          </div>
          <div class="card-body">
            <form method="POST">
              <div class="form-row m-b-55">
                <div class="name">Name</div>
                <div class="value">
                  <div class="row row-space">
                    <div class="col-2">
                      <div class="input-group-desc">
                        <input
                          class="input--style-5"
                          type="text"
                          name="first_name"
                        />
                        <label class="label--desc">first name</label>
                      </div>
                    </div>
                    <div class="col-2">
                      <div class="input-group-desc">
                        <input
                          class="input--style-5"
                          type="text"
                          name="last_name"
                        />
                        <label class="label--desc">last name</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="name">Company</div>
                <div class="value">
                  <div class="input-group">
                    <input class="input--style-5" type="text" name="company" />
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="name">Email</div>
                <div class="value">
                  <div class="input-group">
                    <input class="input--style-5" type="email" name="email" />
                  </div>
                </div>
              </div>
              <div class="form-row m-b-55">
                <div class="name">Phone</div>
                <div class="value">
                  <div class="row row-refine">
                    <div class="col-3">
                      <div class="input-group-desc">
                        <input
                          class="input--style-5"
                          type="text"
                          name="area_code"
                        />
                        <label class="label--desc">Area Code</label>
                      </div>
                    </div>
                    <div class="col-9">
                      <div class="input-group-desc">
                        <input
                          class="input--style-5"
                          type="text"
                          name="phone"
                        />
                        <label class="label--desc">Phone Number</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="name">Subject</div>
                <div class="value">
                  <div class="input-group">
                    <div class="rs-select2 js-select-simple select--no-search">
                      <select name="subject">
                        <option disabled="disabled" selected="selected">
                          Choose option
                        </option>
                        <option>Subject 1</option>
                        <option>Subject 2</option>
                        <option>Subject 3</option>
                      </select>
                      <div class="select-dropdown"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-row p-t-20">
                <label class="label label--block">
                  Are you an existing customer?
                </label>
                <div class="p-t-15">
                  <label class="radio-container m-r-55">
                    Yes
                    <input type="radio" checked="checked" name="exist" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radio-container">
                    No
                    <input type="radio" name="exist" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div>
                <button class="btn btn--radius-2 btn--red" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
