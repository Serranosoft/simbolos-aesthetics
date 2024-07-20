export const colors = {
    button: "#cc527a",
    selected: "rgba(230, 34, 114, 0.25)",
    light: "#F9BAC6",
    // dark: "#cc527a"
}

export const ui = {
    img: {
        aspectRatio: 1,
        width: 35,
    },
    text: {
        fontFamily: "Regular",
        color: "black",
        fontSize: 16.5,
    },
    muted: {
        fontFamily: "Regular",
        color: "#7a7a7a",
        fontSize: 13,
    },
    h1: {
        fontSize: 60,
        fontFamily: "Semibold",
        lineHeight: 65,
    },
    h2: {
        fontFamily: "Bold",
        color: "#fa98ab",
        fontSize: 27,
        textAlign: "center"
    },
    h3: {
        fontFamily: "Medium",
        color: "black",
        fontSize: 23,
    },
    h4: {
        fontFamily: "Semibold",
        color: "black",
        fontSize: 20,
    },

    wrapper: {
        paddingHorizontal: 16,
    },

    list: {
        flex: 1,
    },

    highlight: {
        paddingHorizontal: 12, 
        paddingVertical: 3, 
        fontSize: 13.25, 
        borderRadius: 12
    }
}

export const layout = {
    flex: {
        flex: 1,
    },

    title: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8
    },

    paddingHorizontal: {
        paddingHorizontal: 16
    },

    backgroundLight: {
        backgroundColor: colors.light,
    },

    backgroundWhite: {
        backgroundColor: "#fff",
    },

    contentList: {
        gap: 32, 
        paddingTop: 16, 
        paddingBottom: 100
    },

    zIndex: {
        zIndex: 1,
    },

    row: {
        flexDirection: "row",
    },

    justifyBetween: {
        justifyContent: "space-between",
    },

    alignCenter: {
        alignItems: "center",
    }    
}

export const gap = {
    small: {
        gap: 8
    },

    medium: {
        gap: 12
    },

    big: {
        gap: 16
    }
}

export const padding = {
    smallHorizontal: {
        paddingHorizontal: 8
    },

    mediumHorizontal: {
        paddingHorizontal: 12
    },

    bigHorizontal: {
        paddingHorizontal: 16
    },

    smallVertical: {
        paddingVertical: 8,
    },
    mediumVertical: {
        paddingVertical: 12,
    },
    bigVertical: {
        paddingVertical: 16,
    },
    
    smallTop: {
        paddingTop: 8,
    },
    mediumTop: {
        paddingTop: 12,
    },
    bigTop: {
        paddingTop: 16,
    },
}
export const margin = {
    smallHorizontal: {
        marginHorizontal: 8
    },

    mediumHorizontal: {
        marginHorizontal: 12
    },

    bigHorizontal: {
        marginHorizontal: 16
    },

    smallVertical: {
        marginVertical: 8,
    },
    mediumVertical: {
        marginVertical: 12,
    },
    bigVertical: {
        marginVertical: 16,
    },
    
    smallTop: {
        marginTop: 8,
    },
    mediumTop: {
        marginTop: 12,
    },
    bigTop: {
        marginTop: 16,
    },
}

export const components = {
    header: [
        layout.row, 
        layout.justifyBetween, 
        layout.alignCenter, 
        layout.backgroundLight, 
        padding.mediumHorizontal,
        padding.mediumVertical, 
        gap.small
    ],

    row: [
        layout.row,
        layout.alignCenter,
        gap.medium,
    ],

    error: [
        ui.text,
        { color: "red" }
    ]
}