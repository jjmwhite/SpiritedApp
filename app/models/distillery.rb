# == Schema Information
#
# Table name: distilleries
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  region_id   :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Distillery < ApplicationRecord
  validates :name, :region_id, :description, presence: true

  belongs_to :region, class_name: :Region, foreign_key: :region_id
  has_many :bottles, class_name: :Bottle, foreign_key: :distillery_id

  has_one_attached :photo
end
