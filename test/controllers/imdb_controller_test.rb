require 'test_helper'

class ImdbControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get imdb_index_url
    assert_response :success
  end

end
