package com.dundung.foodheungsinso.domain.recommend.chicken.qustion;

import com.dundung.foodheungsinso.domain.recommend.Question;
import com.dundung.foodheungsinso.domain.recommend.Recommend;
import com.dundung.foodheungsinso.domain.recommend.chicken.result.Chickens;

public class ALittleSpicyQuestion extends Question {

    private static final String CONTENT = "좀 매콤하면 더 좋아.";

    @Override
    public Recommend answerYes() {
        return Chickens.BHC_HOT_FRIED;
    }

    @Override
    public Recommend answerNo() {
        return Chickens.BBQ_GOLD_OLIVE;
    }

    @Override
    public String getContent() {
        return CONTENT;
    }
}
