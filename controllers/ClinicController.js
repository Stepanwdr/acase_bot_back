import HttpError from 'http-errors';
import { Clinic } from '../models';

class ClinicController {
  static clinicRegister = async (req, res, next) => {
    try {
      const {
        name, address, phone, email, description, image,
      } = req.body;
      const existClinic = await Clinic.findOne({
        where: {
          $or: [
            { email },
            { phone },
          ],
        },
      });
      if (existClinic) {
        const errors = {};
        if (existClinic.email === email) {
          errors.email = ['Email must be unique'];
        }
        if (existClinic.phone === phone) {
          errors.phone = ['Email must be unique'];
        }
        throw HttpError(422, { errors });
      }
      const clinic = await Clinic.create({
        name, address, phone, email, description, image,
      });
      res.json({
        status: 'ok',
        clinic,
      });
    } catch (e) {
      next(e);
    }
  }
}
export default ClinicController;
