let week = prompt('Hafta kunini kiriting');
week = week.toLocaleLowerCase();

switch (week) {
    case'dushanba':
    document.write('Ish kini');
    break;
    case'seshanba':
    document.write('Ish kini');
    break;
    case'chorshanba':
    document.write('Ish kini');
    break;
    case'payshanba':
    document.write('Ish kini');
    break;
    case'juma':
    document.write('Ish kini');
    break;
    case'shanba':
    document.write('Dam olsish kini');
    break;
    case'yakshanba':
    document.write('Dam olsish kini');
    break;

    default:
        document.write('Xatolik')
        break;
}