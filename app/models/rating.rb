# == Schema Information
#
# Table name: ratings
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  bottle_id  :integer          not null
#  rating     :integer          not null
#  review     :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rating < ApplicationRecord
  validates :user_id, :bottle_id, :rating, :review, presence: true

  belongs_to :user
  belongs_to :bottle
  
end
