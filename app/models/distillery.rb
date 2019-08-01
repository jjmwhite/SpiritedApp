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

  belongs_to :region 
  has_many :bottles

  has_one_attached :photo
end
