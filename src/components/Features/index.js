import React from 'react'
import { FeaturesContainer, FeaturesH1, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP } from './FeaturesElements'
import Icon1 from '../../images/meeting.png'
import Icon2 from '../../images/proposals.png'
import Icon3 from '../../images/groups.png'
const Features = () => {
  return (
    <>
    <FeaturesContainer id="features">
        <FeaturesH1>More Features</FeaturesH1>
        <FeaturesWrapper>
            <FeaturesCard>
                <FeaturesIcon src={Icon1} />
                <FeaturesH2>Meeting management</FeaturesH2>
                <FeaturesP>Leave nothing to chance and manage/keep track of meetings' agenda, attendance, location and time</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon2} />
                <FeaturesH2>Proposals</FeaturesH2>
                <FeaturesP>Gives every member a chance to suggest detailed proposals that can be viewed by the entire group.</FeaturesP>
            </FeaturesCard>
            <FeaturesCard>
                <FeaturesIcon src={Icon3} />
                <FeaturesH2>Multiple groups</FeaturesH2>
                <FeaturesP>Why stop at one? Register all your investment groups, fundraisers and chamas for effective management</FeaturesP>
            </FeaturesCard>
        </FeaturesWrapper>

    </FeaturesContainer>
    </>
  )
}

export default Features