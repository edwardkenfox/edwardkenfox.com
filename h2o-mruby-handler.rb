Proc.new do |env|
  headers = {}
  headers["my-awesome-header"] = "foobar"

  [399, headers, []]
end
