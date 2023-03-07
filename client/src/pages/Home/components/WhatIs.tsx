import React from 'react'
import { Card } from 'react-bootstrap'
import { StyledCardContainer } from '../../AboutUs/components/MissionStatement'

const WhatIs = () => {

    return (
        <StyledCardContainer>
            <Card.Header className="display-6">
                What Is Local Farmers?
            </Card.Header>
            <Card.Body>
                <p>
                    "The U.S. food and farming system contributes
                    nearly $1 trillion to the national economy—
                    or more than 13 percent of the gross domes-
                    tic product—and employs 17 percent of the
                    labor force.5 With a rapidly increasing world
                    population and expanding global markets,
                    saving American farmland is a prudent
                    investment in world food supply and eco-
                    nomic opportunity.
                    Asian and Latin American countries are the
                    most significant consumers of U.S. agricultur-
                    al exports. Latin America, including Mexico,
                    purchases an average of about $10.6 billion
                    of U.S. agricultural exports each year. Asian
                    countries purchase an average of $23.6 bil-
                    lion/year, with Japan alone accounting for
                    about $10 billion/year.6 Even as worldwide
                    demand for a more diverse diet increases,
                    many countries are paving their arable land
                    to support rapidly expanding economies.
                    Important customers today, they are expected
                    to purchase more agricultural products in the
                    future.
                    While domestic food shortages are unlikely in
                    the short term, the U.S. Census predicts the
                    population will grow by 42 percent in the
                    next 50 years. Many developing nations
                    already are concerned about food security."

                </p>
            </Card.Body>
        </StyledCardContainer>
    )
}

export default WhatIs