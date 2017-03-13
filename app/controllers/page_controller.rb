class PageController < ApplicationController
	before_action :set_product, only: [:show, :edit, :update, :destroy]
  def home
  end
  def catalogo
    @products = Product.all
  end

  def about
  end

  def contact
  end
end
