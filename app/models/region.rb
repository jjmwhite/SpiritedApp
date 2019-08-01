# == Schema Information
#
# Table name: regions
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Region < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :distilleries
  has_many :bottles, through: :distilleries, source: :bottles

  has_one_attached :photo

end
