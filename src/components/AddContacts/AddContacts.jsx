const AddToContacts = () => {
  const handleAddContact = () => {
    const isAndroid = /android/i.test(navigator.userAgent);
    const isIOS = /iphone|ipod|ipad/i.test(navigator.userAgent);

    const phoneNumber = "+37412345678";
    const contactName = "Դռուգս";
    const email = "example@mail.com";

    if (isAndroid) {
      const intentUrl = `intent://addcontact?name=${contactName}&phone=${phoneNumber}&email=${email}#Intent;scheme=tel;package=com.android.contacts;end;`;
      window.location.href = intentUrl;
    } else if (isIOS) {
      const vCardUrl = `https://example.com/contact.vcf`;
      window.location.href = vCardUrl;
    } else {
      alert("Ձեր սարքը չի աջակցում այս գործողությանը");
    }
  };

  return (
    <img
      onClick={handleAddContact}
      className="call"
      src="https://images.macrumors.com/article-new/2018/03/2013-08-26_09-38-25__Phone_iOS7_App_Icon_Rounded-250x250.jpg"
      alt=""
    />
  );
};

export default AddToContacts;
