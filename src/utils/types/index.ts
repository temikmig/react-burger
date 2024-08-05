//---

export type THeaderLinkProps = {
    link: string;
    text: string;
    icon: string;
}

export type TIngredient = {
    _id: string;
    uid?: string;
    index?: number;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    count?: number;
};
  
export type TReadyBun = {
    burgerConstructor: {
        bun: TIngredient;
    }
}
  
export type TReadyIngredients = {
    burgerConstructor: {
        ingredients: TIngredient[];
    }
}

export type TOrder = {
    name: string;
    order: {
        number: number;
    }
    success: boolean;
}

export type TBurgerConstructorItemProps = {
    currentIngredient: TIngredient;
    index: number;
    moveIngredient: (fromIndex: number, toIndex: number) => void;
}

export type TFeedDetailsIngredientProps = {
    currentIngredient: TIngredient;
    index?: number;
    countInOrder: number;
}

export type TUserData = {
    userData: {
        userLoggedIn?: boolean;
        isForgotPassword?: boolean;
        isResetPassword?: boolean;
        isError?: boolean;
        isLoad?: boolean;
        email?: string;
        name?: string;
        password?: string;
    };
    email: string;
    name?: string;
};

export type TUserDataRedux = {
    success: boolean;
    accessToken?: string;
    refreshToken?: string;
    user: {
        email: string;
        name: string;
    }
};

export type TUserAuth = {
    email: string;
    password: string;
};

export type TUserRegistration = {
    name: string;
    email: string;
    password: string;
};

export type TUserForgotPassword = {
    email: string;
};

export type TUserResetPassword = {
    password: string;
    token: string;
};

export type TUserPatch = {
    name?: string;
    email?: string;
    password?: string;
};

export type TTokens = {
    success?: boolean;
    message?: string;
    user?: TUserData;
    accessToken?: string;
    refreshToken?: string;
    data?: Array<TIngredient>;
}

export type TIngredientsGroup = {
    groupName: string;
    groupList: Array<TIngredient>;
    headRef: any;
}

export type TIngredientDetailsItem = {
    head: string;
    val: number;
}

export type TProfileNavigaitonLinkProps = {
    link: string;
    text: string;
}

export type TModalOverlayProps = {
    children: any;
    handleCloseOut: () => void;
}

export type TModalProps = {
    cont: any;
    header?: string;
    handleCloseThis: () => void;
}

export type TIngredientsList = {
    data: {
        success: boolean;
        data: TIngredient[];
    };
    isError: boolean;
    isLoad: boolean;
}

export type TFeed = {
    data: {
        orders: TFeedItem[];
        total: number;
        totalToday: number;
    }
}

export type TFeedOrders = {
    feedData: {
        success: boolean;
        orders: Array<TFeedItem>;
        total: number;
        totalToday: number;
    }
}

export type TFeedOrdersList = {
    ordersList: TFeedItem[];
    ordersListHeader?: string;
}

export type TOrderCard = {
    currentOrder: TFeedItem;
    index?: number;
}

export type TOrderCardIngredient = {
    currentIngredient: TIngredient;
    ingredientIndex: number;
    maxLength: number;
    index: number;
}

export type TOrderDetailsIngredient = {
    currentIngredient: TIngredient;
    countInOrder: number;
}

export type TFeedItem = {
    _id: string;
    ingredients: string[];
    owner?: string;
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    __v: number;
}

export type TOrderDetails = {
    success: boolean;
    orders: TFeedItem[];
}

export type TFeedItemMap = {
    ingredients: ReadonlyArray<TIngredient>;
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
    name: string;
}