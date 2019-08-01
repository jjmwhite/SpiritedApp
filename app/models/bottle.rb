# == Schema Information
#
# Table name: bottles
#
#  id            :bigint           not null, primary key
#  name          :string           not null
#  description   :text             not null
#  distillery_id :integer          not null
#  age           :integer
#  release_year  :integer
#  price         :float            not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Bottle < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :description, :distillery_id, :price, presence: true

  belongs_to :distillery
  has_one :region, through: :distillery, source: :region

end
