Vue.config.productionTip = false

new Vue({
  data() {
    return {
      statusCode: 200,
      headerInputs: [{
        key: '',
        value: ''
      }],
    }
  },
  template: `
    <div class="input-container">
      <select v-model="statusCode">
        <option v-for="option in statusCodeOptions" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <ul>
        <li v-for="(input, index) in headerInputs" :input="input">
          <input type="text" placeholder="Header key" v-model="input.key">
          <input type="text" placeholder="Header value" v-model="input.value">
          <span @click.prevent="removeInput(index)">x</span>
        </li>
      </ul>
      <button @click.prevent="addInput">Add header</button>
      <button @click.prevent="submit">Get response</button>
      <button @click.prevent="reset">Reset</button>
    </div>
  `,
  computed: {
    headerQueryString() {
      const base = `status=${this.statusCode}`

      const qs = this.headerInputs.map((input, index) => {
        if (!input.key || !input.value) return null
        qs = qs.concat(`${input.key}=${input.value}`)
        return qs
      }).join('&')

      return `${base}&${qs}`
    },
    statusCodeOptions() {
      return [
        { value: 200, text: "200 OK" },
        { value: 201, text: "201 Created" },
        { value: 202, text: "202 Accepted" },
        { value: 203, text: "203 Non-Authoritative Information" },
        { value: 204, text: "204 No Content" },
        { value: 205, text: "205 Reset Content" },
        { value: 206, text: "206 Partial Content" },
        { value: 300, text: "300 Multiple Choices" },
        { value: 301, text: "301 Moved Permanently" },
        { value: 302, text: "302 Found" },
        { value: 303, text: "303 See Other" },
        { value: 304, text: "304 Not Modified" },
        { value: 305, text: "305 Use Proxy" },
        { value: 306, text: "306 Unused" },
        { value: 307, text: "307 Temporary Redirect" },
        { value: 308, text: "308 Permanent Redirect" },
        { value: 400, text: "400 Bad Request" },
        { value: 401, text: "401 Unauthorized" },
        { value: 402, text: "402 Payment Required" },
        { value: 403, text: "403 Forbidden" },
        { value: 404, text: "404 Not Found" },
        { value: 405, text: "405 Method Not Allowed" },
        { value: 406, text: "406 Not Acceptable" },
        { value: 407, text: "407 Proxy Authentication Required" },
        { value: 408, text: "408 Request Timeout" },
        { value: 409, text: "409 Conflict" },
        { value: 410, text: "410 Gone" },
        { value: 411, text: "411 Length Required" },
        { value: 412, text: "412 Precondition Failed" },
        { value: 413, text: "413 Request Entry Too Large" },
        { value: 414, text: "414 Request-URI Too Long" },
        { value: 415, text: "415 Unsupported Media Type" },
        { value: 416, text: "416 Requested Range Not Satisfiable" },
        { value: 417, text: "417 Expectation Failed" },
        { value: 418, text: "418 I'm a teapot" },
        { value: 422, text: "422 Unprocessable Entity" },
        { value: 428, text: "428 Precondition Required" },
        { value: 429, text: "429 Too Many Requests" },
        { value: 431, text: "431 Request Header Fields Too Large" },
        { value: 451, text: "451 Unavailable For Legal Reasons" },
        { value: 500, text: "500 Internal Server Error" },
        { value: 501, text: "501 Not Implemented" },
        { value: 502, text: "502 Bad Gateway" },
        { value: 503, text: "503 Service Unavailable" },
        { value: 504, text: "504 Gateway Timeout" },
        { value: 505, text: "505 HTTP Version Not Supported" },
        { value: 511, text: "511 Network Authentication Required" },
        { value: 520, text: "520 Web server is returning an unknown error" },
        { value: 522, text: "522 Connection timed out" },
        { value: 524, text: "524 A timeout occurred" },
      ]
    }
  },
  methods: {
    addInput() {
      this.headerInputs.push({
        key: '',
        value: '',
      })
    },
    removeInput(index) {
      this.headerInputs.splice(index, 1)
    },
    submit() {
      const dest = `${location.origin}${location.pathname}?${this.headerQueryString}`
      window.open(dest)
    },
    reset() {
      this.statusCode = 200
      this.headerInputs = [{
        kek: '',
        value: ''
      }]
    }
  }
}).$mount('#app')
