export const en = {
    locale: 'en',
    messages: {
        'app.title': 'React Backoffice',

        'menu.sidebar.dashboard': 'Dashboard',
        'menu.sidebar.entity': 'Entity',
        'menu.sidebar.exceptions': 'Exceptions',
        'menu.sidebar.exceptions-403': '403 - Forbidden',
        'menu.sidebar.exceptions-404': '404 - Not Found',
        'menu.sidebar.exceptions-500': '500 - Internal Server Error',

        'menu.header.user.settings': 'Account Settings',
        'menu.header.user.logout': 'Logout',
        'menu.header.lang.english': 'Eglish',
        'menu.header.lang.serbian': 'Srpski',

        'table.column.entity.name': 'Name',
        'table.column.entity.surname': 'Surname',
        'table.column.entity.email': 'Email Address',
        'table.column.entity.city': 'City',
        'table.column.entity.postcode': 'Postal Code',
        'table.column.entity.street': 'Street',
        'table.column.entity.title': 'Title',
        'table.column.actions': 'Actions',

        'popconfirm.button.ok': 'Yes',
        'popconfirm.button.cancel': 'Cancel',

        'popconfirm.entity.delete': 'Are You sure You want to delete this entity?',
        'popconfirm.entity.restore': 'Are You sure You want to restore this entity?',

        'page-title.entity.title': 'Entity',
        'page-title.entity.subtitle': 'Browse and manage records of Entity',

        'header-actions.entity.create-new.tooltip': 'Create new entity',

        'title.sign-in': 'Sign in here!',
        'title.forgot-password': 'Forgot Your password?',
        'title.reset-password': 'Reset Your password!',

        'subtitle.sign-in': 'Fill in your credentials!',
        'subtitle.forgot-password': 'Request a new one!',
        'subtitle.reset-password': 'Choose a new one!',

        'validation.required': 'This field is required!',
        'validation.email': 'You must enter valid email address!',
        'validation.password': 'Your password must be at least 8 characters long!',

        'form.input.placeholder.email': 'Email Adrress',
        'form.input.placeholder.password': 'Password',
        'form.input.placeholder.new-password': 'Choose new password',
        'form.input.placeholder.search-table': 'Search table...',

        'button.sign-in': 'Sign in',
        'button.forgot-password': 'Request new password',
        'button.cancel': 'Cancel',

        'label.divide-sign-in': 'Unable to sign in?',
        'label.divide-forgot-password': 'Made a mistake?',
        'label.forgot-password-sign-in': 'Forgot Your password? Request a new one!',
        'label.create-sign-in': `Don't have an account yet? Create one now!`,
        'label.back-to-sign-in': 'Back to sign in!',
        'label.form-required': 'Fields with * are required!',

        'message.auth-error': `You must be logged in!`,
        'message.sign-in-success': `Sign in successful!`,
        'message.sign-in-error': `Wrong credentials!`,
        'message.forgot-password-success': `New password has been successfully requested! Check the email you entered!`,
        'message.forgot-password-error': `Something went wrong! Please check the validity of your email!`,
        'message.reset-password-form-error': `Email & Token pair does not exist!`,
        'message.reset-password-success': `You have successfully changed your password!`,
        'message.reset-password-error': `Email & token pair is not valid!`,
        'message.already-signed-in': `You are already signed in!`,
        'message.language-changed': `Language changed successfully!`,

        'exception.404.description': 'Oops! No data found on that url!',
        'exception.404.button': 'Back to known',
        'exception.403.description': 'No move! You are not allowed to be here!',
        'exception.403.button': 'Back to allowed section',
        'exception.500.description': 'Whoah... We messed something up',
        'exception.500.button': 'Back to safe zone',
    },
    pluralRuleFunction(e, t) {
        return t && e === 1 ? "one" : "other";
    }
}